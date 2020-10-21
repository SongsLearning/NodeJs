const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send('You Entered Root page');
});

app.get('/sub', (req, res) =>{
    res.send('You Entered sub page');
});
app.listen(4628);


const ext = require('./10_extModules');

console.log(ext(5, 10));

console.log(ext.extF1());
console.log(ext.extF2(100));