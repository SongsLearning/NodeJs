const path = require('path');

console.log(__dirname); //dirpath
console.log(__filename); //filepath
console.log('\n');

console.log(path.dirname(__filename)); 
console.log(path.extname(__filename)); 
console.log(path.basename(__filename)); 
console.log(path.parse(__filename)); 


var newPath = path.format({
    root: 'D:\\',
    dir: 'D:\\',
    base: '',
    ext: '',
    name: ''
})

console.log(newPath);

var createPath = path.join(
    __dirname,
    path.sep,
    '..',
    'Chapter02',
    path.sep,
    'index.html'
)           

console.log(createPath);