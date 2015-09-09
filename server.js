var http = require('http');
function onRequest (request, response) {
		console.log(request.url);
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('JSON DATA');
		}

http.createServer(onRequest).listen(1337, '127.0.0.1');
console.log("The server is now running");