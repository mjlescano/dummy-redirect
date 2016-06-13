const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': process.env.DUMMY_REDIRECT_URL || 'https://github.com/404'
  })
  res.end()
})

server.listen(process.env.PORT || 8000)
