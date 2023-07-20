const EventEmitter = require("events");
const http = require("http");

const customEvent = new EventEmitter();

const server = http.createServer();

server.on("request", (req, res) => {
   res.end("Welcom");
});

server.listen(3000, () => {
   console.log(`server is running at... localhost:${3000}`);
});
