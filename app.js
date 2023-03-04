const http = require('http');

// function rqListenonst http = require('http');
//er(req, res) {
// }
//http.createServer(rqListener);

const server = http.createServer((req, res) => {
    console.log(req);
});
server.listen(3000);