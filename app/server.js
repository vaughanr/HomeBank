var http = require("http");
var mongoDB = require("mongojs");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
}).listen(8000);