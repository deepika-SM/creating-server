// const http = require('http');

// // function rqListenonst http = require('http');
// //er(req, res) 
// // }
// //http.createServer(rqListener);

// const server = http.createServer((req, res) => {
//     console.log(req);
// });
// server.listen(3000);

//////Like the youtuber return a response like "Welcome to my Node Js project"
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);

// res.setHeader('Content-Type', 'text/html');
// res.write('<html>');
// res.write('<head><title>My First Page</title><head>');
// res.write('<body><h1>Hello from my Node.js server!></h1></body>');
// res.write('</html>');
// res.end();
// });
// server.listen(3000)
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Enter Message</title><head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
res.write('</html>');
return res.end();
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title><head>');
res.write('<body><h1>Hello from my Node.js server!></h1></body>');
res.write('</html>');
res.end();
});
server.listen(3000);