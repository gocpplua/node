const http = require('http')

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
  console.log(req)
  console.log(res)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
