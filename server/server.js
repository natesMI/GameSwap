var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var http = require('http');
var db = require('./db/data_base.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.get('/', function(req,res) {
  res.sendFile('../client/index.html');
});


app.get('/api/collections', function(req, res){
  console.log("Server get request is firing");
  var result = new Promise(function(resolve){
    db.onGet(resolve);
  }).then(function(items){
    res.send(items);
  });
});




app.post('/api/publish', function(req, res){
  db.onAdd(req.body);
  res.send(302);
});


console.log('Listening...on 8080');
app.listen(8080);



