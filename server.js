var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

io.on('connection', function (socket) {
    socket.on("send message", function (data) {
       fs.writeFileSync("info.json", data);
    })
});

server.listen(3000);