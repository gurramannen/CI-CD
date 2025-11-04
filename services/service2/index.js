const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Service2 OK')
})
server.listen(port, () => console.log(`Service2 listening on ${port}`))
