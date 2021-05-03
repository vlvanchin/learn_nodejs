const http = require('http');

const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
	{ title: "The alchemist", author: "paulo coelho", year: 1988 },
	{ title: "the prophet", author: "gibran", year: 1923}
]);

const authors = JSON.stringify([
	{ name:"paulo", countryOfBirth: "Brazil", yeafOfBirth: 1947},
	{ name:"gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883}
]);

const requestListener = (req,res) => {
	res.setHeader("Content-Type","application/json");

	switch (req.url) {
		case "/books": 
			res.writeHead(200);
			res.end(books);
			break
		case "/authors":
			res.writeHead(200);
			res.end(authors);
			break
		default:
			res.writeHead(404);
			res.end(JSON.stringify({error:"Resource not found"}));
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`server is running on http://${host}:${port}`);
});
