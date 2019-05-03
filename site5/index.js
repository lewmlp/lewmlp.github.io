var express = require('express');
var mongoClient = require("mongodb").MongoClient;
var db = new mongoClient("mongodb://localhost:27017/", {useNewUrlParser: true});
var objectId = require("mongodb").ObjectID;
var application = express();
var jsonParser = express.json();
application.use(express.static('./public'));


db.connect(function(err, client){
    if (err) return console.log(err);
    application.locals.collection = client.db("labweb").collection("sketches");
    application.listen(3000, function(){
        console.log('OK');
    });
});

application.post("/sketch", jsonParser, function(request, result){
    if(!request.body) return result.sendStatus(400);
    console.log(request.body);
    var title = request.body.title;
    var text = request.body.text;
    var collection = request.app.locals.collection;
    collection.insertOne({title: title, text: text}, function(err, res){
        if(err) return console.log(err);
        result.send("Скетч добавлен!");
    });
});

application.put("/sketch", jsonParser, function(request, res){
    if(!request.body) return res.sendStatus(400);
    console.log(request.body);
    var title = request.body.title;
    var text = request.body.text;
    var id = new objectId(request.body.id);
    var collection = request.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {title: title, text: text}}, function(err, result) {
        if (err) return console.log(err);
        res.send("Изменено!");
    });
});

application.delete("/sketch", jsonParser, function(req, res){
    var id = new objectId(req.body.id);
    var collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){
        if (err) return console.log(err);    
        res.send("Удалено!");
    });
    
});

application.get("/sketch", function(req, res) {
    var collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, sketches){
        if (err) return console.log(err);
        res.send(sketches);
    }); 
});