const http = require('http');
const https = require('https');
import * as fs from "fs";
const path = require("path");

const rest = require('./rest');

// 导入controller middleware:
const controller = require('./controller');

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
var enforceHttps = require('koa-sslify').default;

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// Force HTTPS on all page
//app.use(enforceHttps());


// koa-bodyparser必须在router之前被注册到app对象上
app.use(bodyParser());

// bind .rest() for ctx:
app.use(rest.restify());

// 使用middleware:
app.use(controller());

// 在端口3000监听:
http.createServer(app.callback()).listen(3000)

console.log(path.join('sslfile/server.key'))
// SSL options
var options = {
  key: fs.readFileSync(path.join('sslfile/server.key')),  //ssl文件路径
  cert: fs.readFileSync(path.join('sslfile/server.crt'))  //ssl文件路径

  // 下述路径也可以
  //key: fs.readFileSync(('./sslfile/server.key')),  //ssl文件路径
  //cert: fs.readFileSync(('./sslfile/server.crt'))  //ssl文件路径
};
https.createServer(options, app.callback()).listen(3001)
//app.listen(3000);
console.log('app started at port http:3000 https:3001...');