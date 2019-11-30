const express = require('express');
const app = express();
var multer = require('multer');
var upload = multer({dest:'uploads/'});

app.listen(3000,()=>{
    console.log('SERVER IS UP !!!');
});

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.post('/profile',upload.single('avatar'),(req,res,next)=>{
    // req.file is the avatar file
    
    //req.file.filename = req.file.originalname;
    res.send('<h1>Thank you</h1>');
    console.log(req.file);
});