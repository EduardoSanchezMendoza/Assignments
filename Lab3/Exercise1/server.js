var http = require('http');

function onRequest(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createSever(onRequest).listen(8000);