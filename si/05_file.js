const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('req Headers : \n', req.headers);
    console.log('req method : \n', req.method);
    console.log('req url : \n', req.url);
    console.log(req.rawHeaders);

    fs.readFile('./example.html', (err,data) =>{
        if(err){
            throw err;
        } else{
            console.log('클라에게 웹페이지 전송 성공');
            res.end(data);
        }
    })
}).listen(4628, () => {
    console.log(('4628 port WAIT'))
})