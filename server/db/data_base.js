var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

var dbSchema = fs.readFileSync('db/game_swap.sql',{ encoding: "utf-8" });
var db = new sqlite3.Database('db/game_swap.db', onRun);

function onRun(err){
  if(err){
  	console.log('Database connection error.', err.toString());
  	return;
  }

  db.serialize();

  db.exec(dbSchema, function(){
  	console.log("Schema loaded");
  });
}

exports.onAdd = function(collection){
	console.log("Database add function is running");
  db.run("INSERT INTO owners (name, email, ps4games, ps3games, xboxgames, threesixtygames) VALUES (?,?,?,?,?,?)",
   collection['name'], collection['email'], collection['PS4_games'], collection['PS3_games'], 
   collection['Xbox_One_games'], collection['Xbox_360_games'], 
   function(err){
   	if(err){
   		console.log("Insert error: ", err.toString());
   		return;
   	}
   });
}

exports.onGet = function(cb){
  var data;
  var temp = new Promise(function(resolve){
    db.all("SELECT * FROM owners", function(err, row){
      if(err){
        console.log("Database get error: ", err.toString());
      }
      data = row;
      resolve();
    });
  }).then(function(){
    cb(data);
  });
}




