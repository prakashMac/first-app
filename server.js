var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded


// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '12003588',
//   database : 'PP_Node'
// });


						/* Registering the routes  */
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/styles',  express.static(__dirname + '/styles'));
app.use('/controllers',  express.static(__dirname + '/controllers'));
app.use('/templates',  express.static(__dirname + '/templates'));
app.use('/images',  express.static(__dirname + '/images'));
app.use(middleWareFunction);

						/* Main Starting Route  */
app.get('/',function(req,res){
    res.sendFile('index.html',{'root': __dirname + '/templates'});
});
function middleWareFunction(req,res) {
    res.sendFile("index.html", { 'root': __dirname + '/templates'});
}

// app.get('/getData',function(req,res){
// 	//console.log(req.body);
//   var selectOutput='SELECT * FROM users';
//  // console.log(selectOutput);
	 
// 	connection.query(selectOutput, function(err, results) {
//          res.send(results);
//       // console.log(results);
//     });
       
// });

// app.post('/postData',function(req,res){
// 	//console.log(req.body);
//  var insertInput='insert into users values("'+req.body.uname+'","'+req.body.password+'","'+req.body.email+'")';
//  // console.log(selectOutput);
	 
// 	connection.query(insertInput, function(err, results) {
//          res.send(results);
//        //console.log(results);
//     });
       
// });

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

// app.get('/getWriteNeed',function(req,res){
// 	//console.log(req.body);
// 	//console.log(req.body.place);
// 	var selectWriteNeed='select place, need from writeneed';
// 	//console.log(insertWriteNeed);
// 	connection.query(selectWriteNeed, function(err,results){
// 		if(err){
// 			console.log(err);
// 		}
// 		res.send(results);
// 		//console.log(results);
// 	});
// });


						/* Server Running Port  */
// app.listen(3000,function(){
//     console.log('Node server running @ http://localhost:3000');
// });
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('listening on', port);
  });
