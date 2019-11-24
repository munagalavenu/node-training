async function add(a,b){
    if(a<0 || b<0){
        throw new Error('Invalid number ... ');
    }
    return a+b;
}

add(5,6).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
})

async function test() {
    try {
        let res = await add(4,3);
    console.log(res);
    } catch(err) {
        console.log(err)
    }
    
}
test();