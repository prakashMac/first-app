var express = require('express');
var bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI;    //connection.connect();

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


						/* Registering the routes  */
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/styles',  express.static(__dirname + '/styles'));
app.use('/controllers',  express.static(__dirname + '/controllers'));
app.use('/templates',  express.static(__dirname + '/templates'));
app.use('/images',  express.static(__dirname + '/images'));
//app.use(middleWareFunction);

						/* Main Starting Route  */
app.get('/',function(req,res){
    res.sendFile('index.html',{'root': __dirname + '/templates'});
});
// function middleWareFunction(req,res) {
//     res.sendFile("index.html", { 'root': __dirname + '/templates'});
// }

/* Mongo DB */

app.get('/getData',function(req,res){	
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("users").find({}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log("Fetching All In the Collection:");
	    console.log(result);
	    res.send(result);
	    db.close();
	  });
	});
});

/** My Sql DB **/
// app.get('/getData',function(req,res){
// 	//console.log(req.body);
//   var selectOutput='SELECT * FROM users';
//  // console.log(selectOutput);
	 
// 	connection.query(selectOutput, function(err, results) {
//          res.send(results);
//       // console.log(results);
//     });
       
// });


app.post('/postData',function(req,res){
	console.log(req.body);
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mydb");
		var myobj = { username: req.body.username, password: req.body.password,email: req.body.email };
		dbo.collection("users").insertOne(myobj, function(err, res) {
		  if (err) throw err;
		  console.log("1 document inserted");
		  app.get('/getData');
		  db.close();
		});
	});
       
});

// app.post('/postWriteNeed',function(req,res){
// 	//console.log(req.body);
// 	//console.log(req.body.place);
// 	var insertWriteNeed='insert into writeneed values("'+req.body.place+'","'+req.body.need+'","'+req.body.phone+'","'+req.body.category+'","'+req.body.subCategory+'")';
// 	//console.log(insertWriteNeed);
// 	connection.query(insertWriteNeed, function(err,results){
// 		if(err){
// 			console.log(err);
// 		}
// 		res.send(results);
// 		//console.log(results);
// 	});
// });


app.get('/getWriteNeed',function(req,res){	
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("writeneed").find({},{ _id: 0, place: 1, need: 1,phone: 0,category: 0, subCategory: 0}).toArray(function(err, result) {
	    if (err) throw err;
	    console.log("Fetching All In the Collection:");
	    console.log(result);
	    res.send(result);
	    db.close();
	  });
	});
});



						/* Server Running Port  */

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('listening on', port);
  });
