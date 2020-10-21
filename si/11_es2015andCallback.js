var num1 = 1;
var num2 = 2;
var string = num1 + num2 + (num1 + num2);

console.log(string);

string = `${num1} plus ${num2} is '${num1+num2}'`;
console.log(string)



function plus(a,b, callback){
    let returnValue =  a + b;
    callback(returnValue);
}


plus(5, 10 , (returnValue) => {console.log(returnValue)});


function plusMinus(a,b,cb){
    cb(a+b, a-b);
}

plusMinus(5,10,(p,m) => {
    console.log(p);
    console.log(m);
})
