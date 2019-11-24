function add(a, b) {
    let p = new Promise(function(resolve, reject){
        if(a<0 || b < 0) {
            //throw new Error('Invalid number... You given');
            reject('Invalid number... You given');
        }
        else 
            resolve(a+b);
    });
    return p;
}

add(4,9).then(function (res){
    console.log(res);
}).catch(function (err){
    console.log(err);
}) 

console.log('hello worldd !!')
/* 
 */

//ES6
/*
add(4,9).then((res) => {
    console.log(res);
})
*/
//console.log(add(4,8));