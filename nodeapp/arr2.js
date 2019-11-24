var topics = ["Node","Mocha","Chai"];
var newtopics = [...topics,"Angular","React","Svelt"];
newtopics.push("Jest");
console.log(newtopics);

newtopics.splice(3,10);
console.log(newtopics);