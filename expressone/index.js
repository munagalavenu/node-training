const express = require('express');
const app = express();


app.listen(3000,()=>{
    console.log('Server is up: 3000');
});

app.use((req, res, next)=> { //middleware code and middleware code should be kept always top after listen function
    console.log('I am middleware one ....');
    next();
})
app.use((req, res, next)=> { //middleware code we can keep no. of middleware code
    console.log('I am middleware two ....');
    next();
});

app.use(express.static(__dirname+'/public')); //To call static html page like login page etc.. whic is available in public folder
app.use(express.urlencoded({extended:true})); //This middleware required to read form data when u using POST METHOD

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to Express </h2>');
});
app.get('/psl',(req,res)=>{ //THIS QUERY PARAMETER READING
    console.log('Query name: ' + req.query.name)
    //res.send('<h2>Welcome to PSL </h2>');
    res.send('<h2>Welcome to PSL </h2>' + '<h2>Hello : ' + req.query.name + '</h2>')

});
app.get('/greet/:name',(req,res)=>{ //THIS PARAMETER IN PATH
    console.log('Query name: ' + req.query.name)
    //res.send('<h2>Welcome to PSL </h2>');
    res.send('<h2>Welcome to Greet </h2>' + '<h2>Hello : ' + req.params.name + '</h2>')

});
app.get('/greet/:name/:city',(req,res)=>{ //WITH TWO PARAMETERS IN PATH
    console.log('Query name: ' + req.query.name)
    //res.send('<h2>Welcome to PSL </h2>');
    res.send('<h2>Welcome to Greet </h2>' + '<h2>Hello : ' + req.params.name + " , " + req.params.city + '</h2>')

});
app.get('/checkLogin',(req,res)=>{ //WITH TWO PARAMETERS IN PATH
   // console.log('Query name: ' + req.query.name)
    //res.send('<h2>Welcome to PSL </h2>');
    if(req.query.name == 'admin' && req.query.pwd == "password")
        res.send('<h2>Login successfull</h2>')
    else 
    res.send('<h2>Login failed</h2>')

});
 app.post('/login',(req,res)=>{
     let login = req.body.name;
     let pwd = req.body.pwd;
     if(login == 'babu' && pwd == "admin1234")
         res.send('<h2>LOGIN SUCCESSFUL !!</h2><P>WELCOME TO PSL</P>');
     else
        res.redirect('login.html')
});
//This middelware we kept at the end and it is optional
app.use((req,res,next)=>{
    res.send('<h3>File not found !!</h3>');
   next();
});