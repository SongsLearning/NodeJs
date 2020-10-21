
process.on('uncaughtException', (error) => {
    console.log('예기치 못한 애러 발생',error);
})

const {setInterval} = require("timers");

setInterval(() => {
    console.log("3초간격으로 반복하는 영역");
    try{
        throw new Error('서버에러 의도적인');
    }   
    catch(error){
        console.error(error);
    }
},3000);

