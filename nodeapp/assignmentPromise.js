function strLength(str='') {
    let p = new Promise(function(resolve, reject){
        if(!str.length) {
            //throw new Error('Invalid string... You given');
            reject('Invalid string... You given');
        }
        else 
            resolve(str.length);
    });
    return p;
}

strLength('oyeeee').then(function (res){
    console.log(res);
}).catch(function (err){
    console.log(err);
}) 

console.log('hello worldd !!')