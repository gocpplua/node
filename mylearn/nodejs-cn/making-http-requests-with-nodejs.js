const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => { // https.request 返回: <http.ClientRequest>
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    console.log("data")
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.log("error")
  console.error(error)
})

// http.ClientRequest  表示正在进行中的请求（请求头已进入队列）。 请求头仍然可以使用 setHeader(name, value)、getHeader(name) 或 removeHeader(name) API 进行改变。 
// 实际的请求头会与第一个数据块一起发送，或者当调用 request.end() 时发送。
req.end()
