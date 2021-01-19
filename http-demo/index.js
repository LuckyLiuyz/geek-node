const http = require('http');
const fs = require('fs');
console.log('start');
http.createServer(function(request, response) {
  // console.log(request);
  // console.log(response);
  if (request.url == '/favicon.icon') {
    response.writeHead(200);
    response.end();
    return;
  }
  response.writeHead(200);
  // response.end('hello');
  fs.createReadStream(__dirname + '/index.html').pipe(response);
}).listen(3006);