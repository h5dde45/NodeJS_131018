let http = require("http");

let server = http.createServer();

server.on("request",function (request, response) {
   console.log("conn");
   console.log(request.method);
   response.end();
});

server.listen(8080);

server.on("listening",function () {
    console.log("server running on port 8080");
});

