var express = require('express');
var mongoClient = require("mongodb").MongoClient;
var db = new mongoClient("mongodb://localhost:27017/", {useNewUrlParser: true});
var objectId = require("mongodb").ObjectID;
var application = express();
var jsonParser = express.json();
application.use(express.static('./public'));


db.connect(function(err, client){
    if (err) return console.log(err);
    application.locals.collection = client.db("lab5").collection("sketch");
    application.listen(3000, function(){
        console.log('OK');
    });
});