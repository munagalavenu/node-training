function add(a,b) {
    setTimeout(function(){
        return a+b;
    },1000)
    //return a+b;
}

function mul(a,b) {
    return a*b;
}



console.log(add(2,3));
console.log(mul(2,3));

