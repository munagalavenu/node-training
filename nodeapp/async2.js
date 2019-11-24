 function add1(a,b,cb) {
    setTimeout(function(){
        cb(a+b);
    },1000)
} 
function add(a,b,callBack) {
    callBack(a+b);
   
}

add(2,3,function(res){console.log(res)});
add1(2,7,function(res){console.log(res)});

