let greet = require('./util').greet;
let add = require('./util').add;

let myfunctions = require('./util');

greet();
let res = add(30,50);
console.log(res);

myfunctions.greet();
let ress = myfunctions.add(2,4);
console.log(ress);