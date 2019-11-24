const http = require('http');
/* const server = http.createServer(function(req,res) {
    console.log('Hi .... .... ');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>HELO WORLLLLDDDD </h1>')
    res.end();
});

server.listen(3000,function() {
    console.log('Server is up and running ...');
}) */
//2ND WAY USING ARROW FUNCTIONS
/* const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>HELO WORLLLLDDDD </h1>')
    res.end();
});

server.listen(3000,()=> {
    console.log('Server is up and running ...');
}) */
// MANIPULATION USING req.url
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url == "/psl")
    res.write('<h1>HELO WORLLLLDDDD PSL </h1>')
    else if(req.url == "/helo")
        res.write('<h1>HELO WORLLLLDDDD HELLOO </h1>')
    else 
    res.write('<h1>HELO WORLd </h1>')
    
    
    res.end();
});

server.listen(3000,()=> {
    console.log('Server is up and running ...');
})
