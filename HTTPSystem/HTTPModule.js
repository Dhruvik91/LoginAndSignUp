/* My first node js code */
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'COntent-Type': 'text-html'});
    res.write("Hello World");
    res.end();
}).listen(8080);

