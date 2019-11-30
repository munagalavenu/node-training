const fs = require('fs');

const wstream = fs.createWriteStream('message.txt',{highWaterMark:10});

//wstream.setDefaultEncoding('UTF-16'); // TO write in byte code for 
wstream.write('Helo World !!!');
wstream.write('Helo PSL');

/* wstream.on('finish',() =>{

}) */
console.log('File created ......');

