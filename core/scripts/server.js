// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev: true, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      //   console.log(pathname, parsedUrl)
      if (pathname.indexOf('/logos') === 0) {
        const file = path.join(
          __dirname,
          '../..',
          req.url.replace('/logos', 'donations').replace('.png', '/logo.png')
        )
        const stream = fs.createReadStream(file)
        stream.on('open', () => {
          res.setHeader('Content-Type', 'image/png')
          stream.pipe(res)
        })
        stream.on('error', () => {
          res.setHeader('Content-Type', 'text/plain')
          res.statusCode = 404
          res.end('Not found')
        })
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
