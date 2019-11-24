const express = require('express');
const app = express();
const db = require('./mysqldb');

app.set('view engine','ejs');
app.set('views','views')
app.use(express.urlencoded({extended:true})); //This middleware required to read form data when u using POST METHOD
app.listen(3000,()=>{
    console.log('Server is up @3000')
});

app.get('/',(req,res)=>{
    //res.send('HELOO EJS !!1');
    /* res.render('one',{
        name:'babu',
        city:'Hyderbad'
    }); */
    res.render('home');
});

app.get('/search',(req,res)=>{
    //res.send('HELOO EJS !!1');
    /* res.render('one',{
        name:'babu',
        city:'Hyderbad'
    }); */
    res.render('searchView');
});
app.post('/searchAction',(req,res)=>{
    //let sql = 'select *from cartable where id="'+req.query.search+'"';
    let carid = req.body.search;
    let sql = 'select * from cartable where id=?'
    db.execute(sql,[carid]).then(([rows,fields])=>{
        res.render('showResults',{
            cars:rows[0]
        });

    });
})



app.get('/cars',(req,res)=>{
    //res.send('HELOO EJS !!1');
    /* let cars = [{
        make: "Hyundai",
        model: "Grand i10",
        variant: "1Sports"
    },{
        make: "Hyundai",
        model: "Grand i20",
        variant: "Sports"
    },{
        make: "VOKS WAGAN",
        model: "POLO",
        variant: "Sports"
    }]; */
    let sql = 'select *from cartable';
    db.execute(sql).then(([rows,fields])=>{
        res.render('showCars',{
            cars:rows
        });

    });
    /* res.render('showCars',{
        cars:cars
    }); */
});