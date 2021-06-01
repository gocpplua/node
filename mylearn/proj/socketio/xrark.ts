import { Application } from "./application";
import { Event } from "./components/event/eventcomponent";

export class XRArk{
  app_:Application;

  components_ = {
    event : Event,
    event1 : Event,
  }

};



let gXRArk = new XRArk();
gXRArk.app_ = new Application();

console.log("``````````````````gXRArk.app_.components_````````````````````")
Object.keys(gXRArk.app_.components).forEach(key => {
  console.log(key)
})

console.log("``````````````````gXRArk.components_````````````````````")
console.log(typeof gXRArk.components_)
Object.keys(gXRArk.components_).forEach(key => {
  console.log(key)
  gXRArk.app_.load(gXRArk.components_[key])
})

console.log("``````````````````load````````````````````")

gXRArk.app_.load(gXRArk.components_.event)
gXRArk.app_.load(gXRArk.components_.event1) // output:ignore duplicate component: "event"

console.log("```````````````````1```````````````````")

gXRArk.app_.loaded.forEach(element => {
  (element as any)["start"](()=>{
    console.log('1')
  });
});

console.log("```````````````````2```````````````````")
if (typeof (gXRArk.app_.loaded[0] as any)["start"] === 'function') {
  (gXRArk.app_.loaded[0] as any)["start"](()=>{
    console.log('2')
  });
}

console.log("```````````````````3```````````````````")

if(typeof gXRArk.app_.components["__event__"]["start"] === 'function'){
  gXRArk.app_.components["__event__"]["start"](()=>{
    console.log('3')
  });
}


const port = 3001
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){
  // https://www.tutorialspoint.com/socket.io/socket.io_rooms.htm
  // https://devdocs.io/socketio~2/server-api#socket-in-room
  console.log(client.id)
  client.join("room", () =>{
    console.log(client.rooms)
    io.sockets.in('room').emit('XXXX', 'gocpplua') // 向room中的连接发送"XXXX"事件,参数是:gocpplua
  })

  client.broadcast.emit('XXXX', 'gocpplua broadcast') // everyone gets it but the sender
  
  // console.log(client.client) // https://zhuanlan.zhihu.com/p/29148869

  client.on('disconnect', (reason)=>{
    console.log(`${client.id} disconnect:${reason}`)
  })
});


server.listen(port);
console.log('sio Server listening at port %d', port);

// Uncaught exception handler
process.on('uncaughtException', function(err) {
	console.error(' Caught exception: ' + err.stack);
});
