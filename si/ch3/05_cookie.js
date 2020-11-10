//#region 2. cookie 읽기
var fs = require('fs')
var url = require('url')
var cookie = require('cookie')
var http = require('http');


var server = http.createServer(function(req, res){
    console.log('req.headers.cookie: ', req.headers.cookie);    // request 헤더에 담긴 쿠키 문자열

    // cookie 파싱
    var cookies = {}
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
        console.log('cookies: ',cookies);    // cookie 모듈에 의해 객체화된 쿠키 문자열
    }
    res.end();
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});
//#endregion