var express = require('express');
var app = express();


app.use(express.static(__dirname + '/../client'));

app.get('/', function(req,res) {
  res.sendfile('../client/index.html');
});

app.get('api/collections', function(req, res){
	res.sendfile('db/swap_data.js');
});

app.post('api/publish', function(req, res){
	
});







console.log('Listening...on 8080');
app.listen(8080);



