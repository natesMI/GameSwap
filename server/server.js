var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var http = require('http');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req,res) {
  res.sendFile('../client/index.html');
});


app.get('/api/collections', function(req, res){
  console.log("Server get request is firing");

  fs.readFile('./db/swap_data.json', 'utf8', function (err, data) {
  	console.log("line 24", data)
    if (err) throw err;
    res.send(data);

  });
 
});




app.post('/api/publish', function(req, res){
  var collection = JSON.stringify(req.body);

  fs.appendFile('./db/swap_data.json', collection, function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  res.send(302);
});


console.log('Listening...on 8080');
app.listen(8080);



