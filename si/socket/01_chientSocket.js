var net = require('net');

var socket = new net.Socket();
socket.connect({porst:3000, host : 'localhost'}, () => {
    console.log('success connet server');

    socket.write('Hello socket server\n');

    socket.end();

    socket.on('data', (data) => {
        var str = data.toString();

        console.log('recevied data:', data);
    });

    socket.on('end', () => {console.log('end connet')});
})