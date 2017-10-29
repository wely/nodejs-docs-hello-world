var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!" + process.env.MONGODB_URI);

});

var port = process.env.PORT || 1337;
server.listen(port);
//testing comment
console.log("Server running at http://localhost:%d", port);
console.log("test");
