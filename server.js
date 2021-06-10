const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    handle(req, res, parsedUrl)


    // if (pathname === '/sw.js' || /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)) {
    //   const filePath = join(__dirname, '.next', pathname)
    //   app.serveStatic(req, res, filePath)
    // } else {
    //   handle(req, res, parsedUrl)
    // }

  }).listen(3000,"127.0.0.1", (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
