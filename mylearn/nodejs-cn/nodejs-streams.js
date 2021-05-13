// 文件读取方式一
/*
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)
//*/

// 文件读取方式二
/*
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
//*/


const Stream = require('stream')
const readableStream = new Stream.Readable()
const writableStream = new Stream.Writable()

readableStream._read = (size) => {
    console.log("read:" + size)
    let chunk;
    let count = 0;
    console.log('Stream is readable (new data received in buffer)');
    // Use a loop to make sure we read all currently available data
    // 如果这里填写100，那么数据少于100的时候就会一致等待。 如果不填写的话最多读取16384字节，超过就会卡主
    while (null !== (chunk = readableStream.read(10))) {   
      console.count(`读取 ${chunk.length} 字节的数据`);
      count = count + chunk.length;
    }
    console.log('Stream is finish (new data received in buffer:%d)', count);
  }

  // 问题: readableStream.push return false  以后 readableStream.read 卡死 https://stackoverflow.com/questions/38819196/why-readable-push-return-false-every-time-readable-read-is-called
  // Google搜索:readableStream.push return false
for(var i = 0; i < 4096; i++){
    var a = readableStream.push('a!')
    if(!a){
        readableStream.push('')
        console.log("XXXXXXXXXXXXXXXXXXXaaaaXXXXXXXXXXXXXXXXXXXXXXXXXX")
        return
    }
    var b = readableStream.push('b!')
    if(!b){
        readableStream.push('')
        console.log("XXXXXXXXXXXXXXXXXXXXbbbbXXXXXXXXXXXXXXXXXXXXXXXXX")
        return;
    }
}


writableStream._write = (chunk, encoding, next) => {
    console.log("write:" + chunk.toString())
    next()
  }

//readableStream.pipe(writableStream)
//readableStream.on('readable', () => {
    //console.log(readableStream.read())
 // })

process.stdin.pipe(writableStream)

