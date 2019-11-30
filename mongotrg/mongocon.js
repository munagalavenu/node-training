const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017';
var db = '';

MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err) {
        return console.log('error in connection db ...');
    }
     db = client.db('plsdb');
    console.log('connected to ..', db.databaseName);
});

module.exports.db = db;