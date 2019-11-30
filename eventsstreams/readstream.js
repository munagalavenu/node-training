const fs = require('fs');
/* let fSize = fs.readFileSync('input.txt').length;
console.log('File size: ',fSize); */

const rstream = fs.createReadStream('input.txt',{highWaterMark:1000});

rstream.on('data',(chunk)=>{
    console.log(chunk.toString().length);
    console.log('---------------------------------------');
});

rstream.on('end',(chunk)=> {
    console.log('---------------END--------------------');
})

