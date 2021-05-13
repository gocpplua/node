const EventEmitter = require('events')

const event = new EventEmitter()

event.on("start", name =>{
    console.log(name);
})

event.emit("start", 1)

event.on("person", (name, age) =>{
    console.log(name, age);
})

event.emit("person", "cq", 23)