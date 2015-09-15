var express = require('express');
var app = express();
var mongodb = require('mongojs');
var db = mongodb('loginDetails', ['loginDetails']);
var bodyParser = require('body-parser');

var nodemailer = require("nodemailer");
var rand,mailOptions,host,link;

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "emailconfirmationtest54@gmail.com",
        pass: "rackspace"
    }
});

app.use(express.static(__dirname + "/ng-Tutorial"));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// console.log('I am here');
});

app.get('/login', function (req, res) {
	db.loginDetails.find( function(err, docs) {
		res.json(docs);
	});
});


app.get('/send',function(req,res){
    console.log("Came in send module!!");
    rand=Math.floor((Math.random() * 100) + 54);	
	host=req.get('host');
	// console.log('host', host);
	
	link="http://"+req.get('host')+"/verify?id="+rand;

	postData = {
		email: req.query.to,
		userName: req.query.userName,
		password: req.query.password 
	}

	mailOptions={
		to : req.query.to,
		subject : "Please confirm your Email account",
		html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"	
	}
	
	console.log(mailOptions);
	
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});


	app.get('/verify',function(req,res){
		// console.log(req.protocol+":/"+req.get('host'));
			if((req.protocol+"://"+req.get('host'))==("http://"+host) 
				&& (req.query.id == rand)) {
				// console.log("Domain is matched. Information is from Authentic email");
					db.loginDetails.insert(postData, function(err, doc) {
			    		// res.json(doc);
					});

					console.log("email is verified");
					res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
			}
			else {
				res.end("<h1>Request is from unknown source");
			}
	});

// app.post('/register', function (req, res) {
// 	db.loginDetails.insert(req.body, function(err, doc) {
//     res.json(doc);
//   });
// });

app.listen(1337);
 console.log("The server is now running 1337");

// var http = require('http');
// function onRequest (request, response) {
// 		console.log(request.url);
// 			response.writeHead(200, {'Content-Type':'text/plain'});
// 			response.end('JSON DATA');
// 		}

// http.createServer(onRequest).listen(1337, '127.0.0.1');
// console.log("The server is now running");