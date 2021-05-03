const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
	res.writeHead(200);
	res.end("my first server!");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log (`server is running on http://${host}:${port}`);
});

