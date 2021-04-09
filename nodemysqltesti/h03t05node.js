const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer(function(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    switch(pathname) {
        case '/':
            fs.readFile('h03t05.html', (error, data) => {
                if(error) {
                    response.writeHead(404, {'Content-Type':'text/html'});
                    return response.end("Page not found");
                } else {
                    
                    response.writeHead(200, {'Content-Type':'text/html'});
                    response.write(data);
                    response.end();
                }
            });
        break;
        case '/h03t05.js':
            fs.readFile('h03t05.js', (error, data) => {
                if(error) {
                    return response.end("Script couldnt loaded");
                } else {
                    response.write(data);
                    response.end();
                }
            });
        break;
        case '/node_modules/jquery/dist/jquery.min.js':
            fs.readFile('node_modules/jquery/dist/jquery.js', (error, data) => {
                if(error) {
                    return response.end("Script couldnt loaded");
                } else {
                    response.write(data);
                    response.end();
                }
            });
        break;
    }
});
server.listen(port, function(error) {
    if(error) throw error;
    console.log("Server is listening port : " + port);
})