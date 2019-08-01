var net = require('net');

var printServer = net.createServer(function printServer(socket) {
  console.log('connection established');

  socket.on('data', function logData(data) {
    console.log(data.toString());
  })
})

printServer.listen(1998);

var printClient = net.Socket();
printClient.connect(1998);
printClient.write('Hello world');
printClient.end();
