var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var server = http.createServer((req, res) => {

    var parsedUrl = url.parse(req.url);     // url parsing
    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    if(qs.num1 && qs.num2) {  // 쿼리가 존재하는 경우(From태그에서 값을 입력 받은 경우)
        // 숫자들이 들어왔다면 계산해서 값을 돌려주기
        var n1 = parseInt(qs.num1); // Int값 또는 NaN
        var n2 = parseInt(qs.num2); 
        var sum = 0;
        if(Number.isNaN(n1) || Number.isNaN(n2)) {
            // 오류상황 (숫자만 입력되지 않은 경우)
            console.log(`클라이언트가 숫자만 입력하지 않음`);
            res.writeHead(302, {'Location': 'http://localhost:8080'});
        } else {
            // 진짜로 계산을 처리해서 돌려줄 부분
            for(var i = n1; i <= n2; i++) {
                sum += i;
            }
            res.end(`<h1>result: ${sum}   :(</h1>`);
        }
    } else {    // 쿼리가 존재하지 않는 경우(초기 접속)
       fs.readFile('./sum.html', (err, data) => {
           res.end(data);
       });
    }
}).listen(8080, () => {
    console.log(`8080포트로 클라이언트의 요청을 받아들일 준비 완료`);
});