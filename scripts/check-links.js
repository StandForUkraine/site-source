#!/usr/bin/env node
// Checks that every `link` / `donateLink` in the donations YAML files still
// leads to a live page on the organization's own domain — catches expired
// domains that started serving parking pages / ad redirects.
//
// Usage: node scripts/check-links.js [--include-hidden] [--json]
// Exit code: 0 = all good (warnings allowed), 1 = at least one failure.
const fs = require('fs')
const path = require('path')
const yaml = require('yaml')

const ROOT = path.join(__dirname, '..')
const TIMEOUT_MS = 20000
const MAX_REDIRECTS = 10
const CONCURRENCY = 8
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

// Common multi-label public suffixes we link to; used to compare registrable domains.
const SECOND_LEVEL_TLDS = new Set([
  'org.ua', 'com.ua', 'gov.ua', 'net.ua', 'in.ua', 'kyiv.ua', 'edu.ua',
  'co.uk', 'org.uk', 'com.au', 'org.au', 'com.tr', 'org.pl', 'com.pl',
])

// If the final page lands on one of these, the domain is parked / for sale.
const PARKING_HOSTS = [
  'sedo.com', 'sedoparking.com', 'parkingcrew.net', 'bodis.com', 'dan.com',
  'afternic.com', 'hugedomains.com', 'godaddy.com', 'namecheap.com',
  'porkbun.com', 'dynadot.com', 'undeveloped.com', 'above.com',
]

const PARKING_PHRASES = [
  'domain is for sale', 'buy this domain', 'this domain may be for sale',
  'domain has expired', 'this domain expired', 'renew this domain',
  'sedoparking', 'parkingcrew', 'related searches', 'domain parking',
  'заблоковано реєстратором', 'домен продається',
]

function registrableDomain(hostname) {
  const labels = hostname.toLowerCase().replace(/\.$/, '').split('.')
  if (labels.length <= 2) return labels.join('.')
  const lastTwo = labels.slice(-2).join('.')
  const take = SECOND_LEVEL_TLDS.has(lastTwo) ? 3 : 2
  return labels.slice(-take).join('.')
}

function collectLinks() {
  const links = [] // { url, org, title, file, field }
  const dirs = fs
    .readdirSync(path.join(ROOT, 'donations'))
    .filter((d) => /^\d+$/.test(d))
    .sort((a, b) => a - b)
  const includeHidden = process.argv.includes('--include-hidden')
  for (const dir of dirs) {
    const orgDir = path.join(ROOT, 'donations', dir)
    const en = yaml.parse(fs.readFileSync(path.join(orgDir, 'en.yml'), 'utf8'))
    if (en.hidden && !includeHidden) continue
    for (const file of fs.readdirSync(orgDir).filter((f) => f.endsWith('.yml'))) {
      const doc = file === 'en.yml' ? en : yaml.parse(fs.readFileSync(path.join(orgDir, file), 'utf8'))
      for (const field of ['link', 'donateLink']) {
        if (doc[field]) {
          links.push({ url: doc[field], org: dir, title: en.title, file: `donations/${dir}/${file}`, field })
        }
      }
    }
  }
  return links
}

async function fetchWithRedirects(url) {
  const chain = []
  let current = url
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    let res
    try {
      res = await fetch(current, {
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          'User-Agent': UA,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      })
    } finally {
      clearTimeout(timer)
    }
    chain.push({ url: current, status: res.status })
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      current = new URL(res.headers.get('location'), current).href
      res.body?.cancel()
      continue
    }
    let bodySample = ''
    try {
      if ((res.headers.get('content-type') || '').includes('html')) {
        bodySample = (await res.text()).slice(0, 200000).toLowerCase()
      } else {
        res.body?.cancel()
      }
    } catch {
      /* body read failures don't change the verdict */
    }
    return { chain, finalUrl: current, status: res.status, bodySample }
  }
  return { chain, finalUrl: current, status: -1, error: 'too many redirects' }
}

function verdict(link, result) {
  if (result.error === 'too many redirects') return { level: 'FAIL', reason: 'redirect loop' }

  const finalHost = new URL(result.finalUrl).hostname
  const finalDomain = registrableDomain(finalHost)
  const originalDomain = registrableDomain(new URL(link.url).hostname)

  if (PARKING_HOSTS.includes(finalDomain)) {
    return { level: 'FAIL', reason: `redirects to domain marketplace/registrar: ${finalHost}` }
  }
  const phrase = PARKING_PHRASES.find((p) => result.bodySample?.includes(p))
  if (phrase) {
    return { level: 'FAIL', reason: `page looks parked/expired (matched: "${phrase}")` }
  }
  if (result.status >= 400) {
    // Bot protection (Cloudflare & co) answers 403/429/503 to scripts while the site is fine in a browser.
    const botStatuses = [403, 429, 503]
    if (botStatuses.includes(result.status)) {
      return { level: 'WARN', reason: `HTTP ${result.status} — possibly bot protection, verify in a browser` }
    }
    return { level: 'FAIL', reason: `HTTP ${result.status}` }
  }
  if (result.status === -1 || result.status === 0) {
    return { level: 'FAIL', reason: 'no response' }
  }
  if (finalDomain !== originalDomain) {
    return { level: 'WARN', reason: `redirects off-domain: ${link.url} -> ${result.finalUrl}` }
  }
  return { level: 'OK' }
}

async function checkUrl(url) {
  try {
    return await fetchWithRedirects(url)
  } catch (err) {
    // one retry for transient network errors
    await new Promise((r) => setTimeout(r, 2000))
    try {
      return await fetchWithRedirects(url)
    } catch (err2) {
      return { chain: [], finalUrl: url, status: 0, error: err2.cause?.code || err2.message }
    }
  }
}

async function main() {
  const links = collectLinks()
  const byUrl = new Map()
  for (const link of links) {
    if (!byUrl.has(link.url)) byUrl.set(link.url, [])
    byUrl.get(link.url).push(link)
  }
  const urls = [...byUrl.keys()]
  console.error(`Checking ${urls.length} unique URLs from ${links.length} link entries...`)

  const results = new Map()
  let cursor = 0
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (cursor < urls.length) {
        const url = urls[cursor++]
        const result = await checkUrl(url)
        results.set(url, result)
      }
    })
  )

  const problems = []
  for (const [url, sources] of byUrl) {
    const result = results.get(url)
    const v = result.error
      ? { level: 'FAIL', reason: `network error: ${result.error}` }
      : verdict(sources[0], result)
    if (v.level !== 'OK') {
      problems.push({ url, sources, ...v, status: result.status, finalUrl: result.finalUrl })
    }
  }

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(problems, null, 2))
  } else {
    const fails = problems.filter((p) => p.level === 'FAIL')
    const warns = problems.filter((p) => p.level === 'WARN')
    for (const list of [fails, warns]) {
      for (const p of list) {
        const orgs = [...new Set(p.sources.map((s) => `#${s.org} ${s.title} (${s.field})`))].join(', ')
        console.log(`${p.level}: ${p.url}`)
        console.log(`  ${p.reason}`)
        console.log(`  used by: ${orgs}`)
      }
    }
    console.log(`\n${urls.length} URLs checked: ${urls.length - problems.length} ok, ${warns.length} warnings, ${fails.length} failures`)
  }
  process.exit(problems.some((p) => p.level === 'FAIL') ? 1 : 0)
}

main()
