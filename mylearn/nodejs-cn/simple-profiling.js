
// 易于分析的 Node.js 应用程序: https://nodejs.org/zh-cn/docs/guides/simple-profiling/
// 火焰图: https://nodejs.org/zh-cn/docs/guides/diagnostics-flamegraph/
// Perf 安装: sudo apt install linux-tools-common
// Perf　依赖项目安装: sudo apt install linux-tools-4.15.0-142-generic
// 启用 pref 并运行 node：　sudo perf record -e cycles:u -g -- node --perf-basic-prof mylearn/nodejs-cn/simple-profiling.js
// 生成可视化的数据文件: sudo perf script -f > perfs.out
// 安装 stackvis: sudo npm i -g stackvis
// 生成html:stackvis perf < perfs.out > flamegraph.htm
// 浏览器打开 flamegraph.htm
const http = require('http')

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
