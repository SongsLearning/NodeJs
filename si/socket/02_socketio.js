

const { formatWithOptions } = require('util');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var people = 0;


var preStr;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');    
});

io.on('connection', (socket) => {
  people += 1;
  var id = socket.id;
  var canchat = true;
  var spamCnt = 0;

  io.emit('people count',people.toString())
  console.log('a user connected_');  

  socket.on('disconnect', (socket) => {
    people -= 1;
    console.log('disconnect')
  })
 

  
  socket.on('chat message', (msg) => {
    console.log(msg);
    
    setTimeout(()=>{
      canchat = true;
      console.log('도배해제');
    },5000);
      
      
    if(msg === preStr || msg.length > 50){
      console.log("폐기");
      return;
    }

    if(canchat == true){
      io.emit('chat message', msg);
      
     canchat = false;
    }
    else{
      console.log(socket.id + "도배");
      spamCnt += 1;

      if(spamCnt > 10)
      {
        io.emit('bye chat', msg);
        socket.disconnect();

      }
      
    }
    preStr = msg;
  });

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});