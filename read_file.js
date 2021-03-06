var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {

    // Read the file
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;

        // Send the response
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}).listen(8000);

console.log("Server running on http:localhost:8000");