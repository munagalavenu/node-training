function gettopics () {
    return ['Angular','React'];
}

//let tps = gettopics();
//console.log(tps);

function greet() {
    return function() {
        return 'helo';
    }
}
let [one,two] = gettopics();
console.log(one);
console.log(greet()());
