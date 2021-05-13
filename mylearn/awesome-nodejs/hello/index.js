require('colors')
console.log('a'.rainbow)

var start = Date.now();
setTimeout(function(){
    console.log(Date.now() - start);
    for(var i = 0; i < 1000000; i++){}
    console.log(Date.now() - start);
}, 1000);

setTimeout(function(){
    console.log(Date.now() - start);
}, 2000);


var books = ["b1", "b2"];
var http = require('http')
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Context-Type':'text/html'});
    var str = '<b>' + books.join('</b><br><b>') + '</b>';
    books = [];
    res.end(str);
})

server.listen(3000)