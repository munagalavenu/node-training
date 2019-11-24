const fs = require('fs');

fs.readFile('message.txt',function(err,data){ //IF file not found then return custom error message.
    if(err) return console.log("ERROR OPENING FILE");
    console.log(data.toString());

})
console.log("Helloo this is Async call \n");

/*this is sync call */
let data1 = fs.readFileSync('message2.txt');
console.log(data1.toString());
console.log("\n Helloo this is sync call");