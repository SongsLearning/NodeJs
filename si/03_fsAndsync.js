 

 const fs = require('fs');

 fs.writeFileSync('./readMe.txt','동기식 파일 쓰기, 저장할 문자열.')

 try{
     var data = fs.readFileSync('./readMe.txt');
    
     console.log(data);
     console.log(data.toString());
}catch(error){
    console.error('fs.readFileSync error :  ', error)
}

fs.writeFile('./readMe.txt','비동기식 파일 쓰기, 파일이 존재하면 넣어줌.',(err,data) => {
    if(err){
        console.log(err);
    }

});

fs.readFile('./readMe.txt', (err, data)=>{
    if(err){
        console.log('fs error')
    }
    else{
        console.log(data.toString());
    }
});


const myEventListener = require('events');
const myEvent = new myEventListener();

myEvent.addListener('event1', () => {
    console.log('이벤트1 실행');
});


myEvent.addListener('event1', () => {
    console.log('덧붙여짐');
});
myEvent.on('event1', ()=>{
    console.log('on이라는 메소드로도 등록가능');
});

myEvent.once('event1', ()=>{
    console.log('해당 리스너는 한차례만 등록됨');
});

myEvent.emit('event1');
myEvent.emit('event1');
myEvent.emit('event1');