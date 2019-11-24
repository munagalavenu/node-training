const express = require('express');
const cars = require('./store');

const app = express();
app.use(express.json()); //TO ENABLE json payloads


app.listen(3000,()=>{
    console.log('SERVER IS UP !!!');
});

app.get('/',(req,res)=>{
    res.send('<h3>REST API DEMO</h3>');
});

app.get('/cars',(req,res)=>{
    res.json(cars)
});

app.get('/cars/:id',(req,res)=>{
    let id = req.params.id;
    res.json(cars.filter( c=> c.id == id));
});

app.post('/cars',(req,res)=>{
    let car = req.body;
    cars.push(car);
    res.status(200).json(cars);
});

app.delete('/cars/:id',(req,res)=>{
    let id = req.params.id;
    res.json(cars.filter( c=> c.id != id));
    /*
    let id = req.params.id;
    cars.forEach((c,index)=>{
        if(c.id == id) {
            cars.splice(index,1);
        res.status(200).json(c);
        }
        
    })
    */
});
app.put('/cars/:id',(req,res)=>{
    let id = req.params.id;
    let updateCar = cars.find( c=> c.id == id);
    let car = req.body;
    let val = {...updateCar, ...car};
    res.status(200).json(val);
});

