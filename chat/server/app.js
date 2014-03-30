console.log("Server started");
var Set = require("collections/set");

var clients  = new Set();

var WebSocketServer = require('ws').Server
    wss = new WebSocketServer({port: 8080});
    wss.on('connection', function(ws) {

    	clients.add(ws);
    	console.log("Client connected total=" + set.length);

	    ws.on('message', function(message) {
	        console.log('received: %s', message);
	    });

	    ws.on('close', function() {
	    	clients.delete(ws);
	    });

	    ws.send('Welcome to my chat server!');
});
