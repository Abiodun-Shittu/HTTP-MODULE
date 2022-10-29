const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
	let filePath = path.join(__dirname, "views", "index.html");
	switch (req.url) {
		case "/":
			fs.readFile(filePath, "utf8", (err, data) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;
		case "/about":
			filePath = path.join(__dirname, "views", "about.html");
			fs.readFile(filePath, "utf8", (err, data) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;
		case "/contact":
			filePath = path.join(__dirname, "views", "contact.html");
			fs.readFile(filePath, "utf8", (err, data) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;
		case "/home":
			fs.readFile(filePath, "utf8", (err, data) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;
		default:
			res.writeHead(404);
			res.end(JSON.stringify({ error: "Resource not found" }));
			break;
	}
});

const port = 8000;
const host = "localhost";

server.listen(port, host, () => {
	console.log(`server listening on http://${host}:${port}`);
});
