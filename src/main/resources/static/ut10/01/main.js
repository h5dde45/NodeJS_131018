let app = require("http").createServer(handler);
let io = require("socket.io")(app);
let fs = require("fs");
let path = require("path");
let port = 8080;

function handler(reg, res) {
    fs.readFile(path.join(__dirname, "index.html"),
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading index.html");
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    )
}

io.on("connection", function (socket) {
    socket.emit("news", {greeting: "hw"});
    socket.on("greeting", function (data) {
        console.log(data);
    })
});

app.listen(port, function () {
    console.log("app run on " + port + " port")
});