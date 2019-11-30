const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err) {
        return console.log('error in connection db ...');
    }
    var db = client.db('psldb');
    console.log('connected to ..', db.databaseName);
    db.collection('products').deleteOne({code:'55'});
    console.log('deleted .... ');
    client.close();
})