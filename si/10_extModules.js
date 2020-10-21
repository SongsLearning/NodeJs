const printMsg = () => {
    console.log('print msg');
}

const MAX = 100;
const randomInteger = (input) => {
    return Math.floor((Math.random() * input));
}

 module.exports = (a,b) => (a+b);

 module.exports.extF1 = printMsg;
 module.exports.extF2 = randomInteger;