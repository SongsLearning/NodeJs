const http = require('http');


http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>sever</p>');
}).listen(4628, () => {
    console.log('4628sever 대기중');
})

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>sever</p>');
});

server.listen(2913);

server.on('listening', ()=>{
    console.log('2913 server 대기중')
})