console.log("Server started");
var Set = require("collections/set");
var Iterator = require("collections/iterator");

var clients  = new Set();

var WebSocketServer = require('ws').Server
    wss = new WebSocketServer({port: 8080});
    wss.on('connection', function(ws) {

    	clients.add(ws);
    	console.log("Client connected total=" + clients.length);

	    ws.on('message', function(message) {
	        Iterator(clients.iterate()).forEach(function(c){
		        console.log('received: %s', message);	        	
	        	c.send(message);
	        });
	    });

	    ws.on('close', function() {
	    	clients.delete(ws);
	    });

	    ws.send('Welcome to my chat server!');
});
