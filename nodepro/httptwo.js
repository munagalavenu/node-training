const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    let rurl = url.parse(req.url,true);
    //console.log(rurl.query.name)
    let name = rurl.query.name;
    res.write("<h1>HELOO: "+name+"</h1>")
       
    res.end();
});

server.listen(3000,()=> {
    console.log('Server is up and running ...');
})