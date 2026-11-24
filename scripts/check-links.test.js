const assert = require('node:assert/strict')
const http = require('node:http')
const { after, test } = require('node:test')
const { classify, checkUrl, failureExit, fetchWithRedirects } = require('./check-links')

const originalFetch = global.fetch

function localFetch(url, options) {
  const href = typeof url === 'string' ? url : url instanceof URL ? url.href : String(url)
  const parsed = new URL(href)
  if (parsed.hostname !== '127.0.0.1') {
    throw new Error(`refusing non-local URL ${href}`)
  }
  return originalFetch(url, options)
}

global.fetch = localFetch
after(() => {
  global.fetch = originalFetch
})

function listen(server) {
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server.address().port))
  })
}

async function closeServer(server) {
  server.closeAllConnections()
  await new Promise((resolve) => server.close(() => resolve()))
}

async function withServer(handler) {
  const server = http.createServer(handler)
  const port = await listen(server)
  return {
    url: (path) => `http://127.0.0.1:${port}${path}`,
    close: () => closeServer(server),
  }
}

async function judged(url) {
  const result = await fetchWithRedirects(url)
  return { result, verdict: classify({ url }, result) }
}

test('HTTP 200 and 204 are success', async () => {
  const srv = await withServer((req, res) => {
    const status = Number(new URL(req.url, 'http://127.0.0.1').searchParams.get('status'))
    if (status === 204) {
      res.writeHead(204)
      res.end()
      return
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>organization page</html>')
  })
  try {
    const ok = await judged(srv.url('/?status=200'))
    assert.equal(ok.result.status, 200)
    assert.equal(ok.verdict.level, 'OK')
    const empty = await judged(srv.url('/?status=204'))
    assert.equal(empty.result.status, 204)
    assert.equal(empty.verdict.level, 'OK')
  } finally {
    await srv.close()
  }
})

test('HTTP 404 and 500 are failures', async () => {
  const srv = await withServer((req, res) => {
    const status = Number(new URL(req.url, 'http://127.0.0.1').searchParams.get('status'))
    res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>missing</html>')
  })
  try {
    for (const status of [404, 500]) {
      const got = await judged(srv.url(`/?status=${status}`))
      assert.equal(got.verdict.level, 'FAIL', got.verdict.reason)
      assert.match(got.verdict.reason, new RegExp(`HTTP ${status}`))
    }
  } finally {
    await srv.close()
  }
})

test('HTTP 403, 429 and 503 are warnings', async () => {
  const srv = await withServer((req, res) => {
    const status = Number(new URL(req.url, 'http://127.0.0.1').searchParams.get('status'))
    res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>protected</html>')
  })
  try {
    for (const status of [403, 429, 503]) {
      const got = await judged(srv.url(`/?status=${status}`))
      assert.equal(got.verdict.level, 'WARN', got.verdict.reason)
      assert.match(got.verdict.reason, new RegExp(`HTTP ${status}`))
    }
  } finally {
    await srv.close()
  }
})

test('parking phrase on 403, 429 and 503 stays a warning', async () => {
  const srv = await withServer((req, res) => {
    const status = Number(new URL(req.url, 'http://127.0.0.1').searchParams.get('status'))
    res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>Domain is for sale</html>')
  })
  try {
    for (const status of [403, 429, 503]) {
      const got = await judged(srv.url(`/?status=${status}`))
      assert.equal(got.verdict.level, 'WARN', `${status} ${got.verdict.reason}`)
    }
  } finally {
    await srv.close()
  }
})

test('parking phrase on a live page is a failure', async () => {
  const srv = await withServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>This domain is for sale</html>')
  })
  try {
    const got = await judged(srv.url('/'))
    assert.equal(got.verdict.level, 'FAIL')
    assert.match(got.verdict.reason, /domain is for sale/)
  } finally {
    await srv.close()
  }
})

test('relative Location is followed', async () => {
  const srv = await withServer((req, res) => {
    if (req.url === '/start') {
      res.writeHead(302, { Location: '/landed' })
      res.end()
      return
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>landed</html>')
  })
  try {
    const url = srv.url('/start')
    const got = await judged(url)
    assert.equal(got.result.status, 200)
    assert.ok(got.result.finalUrl.endsWith('/landed'), got.result.finalUrl)
    assert.equal(got.verdict.level, 'OK')
  } finally {
    await srv.close()
  }
})

test('redirect without Location is a failure', async () => {
  const srv = await withServer((req, res) => {
    res.writeHead(302, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<html>moved</html>')
  })
  try {
    const got = await judged(srv.url('/gone'))
    assert.equal(got.result.status, 302)
    assert.equal(got.verdict.level, 'FAIL')
    assert.match(got.verdict.reason, /without Location/)
  } finally {
    await srv.close()
  }
})

test('excessive redirects fail', async () => {
  let hits = 0
  const srv = await withServer((req, res) => {
    hits += 1
    res.writeHead(302, { Location: '/loop' })
    res.end()
  })
  try {
    const url = srv.url('/loop')
    const got = await judged(url)
    assert.equal(hits, 11)
    assert.equal(got.result.error, 'too many redirects')
    assert.equal(got.verdict.level, 'FAIL')
    assert.match(got.verdict.reason, /too many redirects/)
  } finally {
    await srv.close()
  }
})

test('registrable parking host is a failure', () => {
  const verdict = classify(
    { url: 'https://org.example/help' },
    { finalUrl: 'https://sedo.com/search', status: 200, bodySample: '<html>welcome</html>' }
  )
  assert.equal(verdict.level, 'FAIL')
  assert.match(verdict.reason, /sedo\.com/)
})

test('parking host still fails when the status is protected', () => {
  const verdict = classify(
    { url: 'https://org.example/help' },
    {
      finalUrl: 'https://www.godaddy.com/forsale',
      status: 403,
      bodySample: 'domain is for sale',
    }
  )
  assert.equal(verdict.level, 'FAIL')
  assert.match(verdict.reason, /godaddy\.com/)
})

test('off-domain final page is a warning', () => {
  const verdict = classify(
    { url: 'https://charity.example/donate' },
    { finalUrl: 'https://other.example/donate', status: 200, bodySample: 'ok' }
  )
  assert.equal(verdict.level, 'WARN')
  assert.match(verdict.reason, /off-domain/)
})

test('html sample keeps a phrase inside 200000 characters and ignores one past it', async () => {
  const phrase = Buffer.from('domain is for sale')
  const body = Buffer.alloc(250000, 0x62)
  phrase.copy(body, 1000)
  const parkedLate = Buffer.alloc(250000, 0x63)
  phrase.copy(parkedLate, 220000)
  const srv = await withServer((req, res) => {
    const late = req.url.includes('late')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(late ? parkedLate : body)
  })
  try {
    const seen = await judged(srv.url('/early'))
    assert.equal(seen.verdict.level, 'FAIL', seen.verdict.reason)
    const hidden = await judged(srv.url('/late'))
    assert.equal(hidden.verdict.level, 'OK', hidden.verdict.reason)
  } finally {
    await srv.close()
  }
})

test('html body is not fully buffered when the response keeps sending', { timeout: 8000 }, async () => {
  const phraseAt = 200000
  const phrase = Buffer.from('domain is for sale')
  const cap = 8 * 1024 * 1024
  let sent = 0
  let closedSent = null
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    req.on('close', () => {
      closedSent = sent
    })
    const pump = () => {
      if (sent >= cap) return
      const size = Math.min(65536, cap - sent)
      const buf = Buffer.alloc(size, 0x62)
      const overlapStart = Math.max(sent, phraseAt)
      const overlapEnd = Math.min(sent + size, phraseAt + phrase.length)
      if (overlapStart < overlapEnd) {
        phrase.copy(buf, overlapStart - sent, overlapStart - phraseAt, overlapEnd - phraseAt)
      }
      const ok = res.write(buf)
      sent += size
      if (sent >= cap) return
      if (ok) setImmediate(pump)
      else res.once('drain', pump)
    }
    pump()
  })
  const port = await listen(server)
  const url = `http://127.0.0.1:${port}/stream`
  const stop = setTimeout(() => server.closeAllConnections(), 5000)
  try {
    const result = await fetchWithRedirects(url)
    const verdict = classify({ url }, result)
    assert.equal(result.status, 200)
    assert.equal(verdict.level, 'OK', verdict.reason)
    await new Promise((resolve) => setTimeout(resolve, 100))
    assert.ok(closedSent != null, 'response body was left open')
    assert.ok(closedSent < 1024 * 1024, `buffered too far: ${closedSent} bytes`)
  } finally {
    clearTimeout(stop)
    await closeServer(server)
  }
})

test('ETIMEDOUT stays a failure after one retry', { timeout: 10000 }, async () => {
  let calls = 0
  global.fetch = async () => {
    calls += 1
    const err = new TypeError('fetch failed')
    err.cause = { code: 'ETIMEDOUT' }
    throw err
  }
  try {
    const url = 'http://127.0.0.1/timeout'
    const result = await checkUrl(url)
    assert.equal(calls, 2)
    assert.equal(result.error, 'ETIMEDOUT')
    const verdict = classify({ url }, result)
    assert.equal(verdict.level, 'FAIL')
    assert.match(verdict.reason, /ETIMEDOUT/)
  } finally {
    global.fetch = localFetch
  }
})

test('CERT_HAS_EXPIRED stays a failure', { timeout: 10000 }, async () => {
  let calls = 0
  global.fetch = async () => {
    calls += 1
    const err = new TypeError('fetch failed')
    err.cause = { code: 'CERT_HAS_EXPIRED' }
    throw err
  }
  try {
    const url = 'http://127.0.0.1/expired'
    const result = await checkUrl(url)
    assert.equal(calls, 2)
    assert.equal(result.error, 'CERT_HAS_EXPIRED')
    const verdict = classify({ url }, result)
    assert.equal(verdict.level, 'FAIL')
    assert.match(verdict.reason, /CERT_HAS_EXPIRED/)
  } finally {
    global.fetch = localFetch
  }
})

test('exit code is 1 only when a failure exists', () => {
  assert.equal(failureExit([]), 0)
  assert.equal(failureExit([{ level: 'WARN' }]), 0)
  assert.equal(failureExit([{ level: 'WARN' }, { level: 'FAIL' }]), 1)
})
