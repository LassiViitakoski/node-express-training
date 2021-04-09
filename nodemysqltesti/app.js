const http = require("http");
const fs = require('fs');
const port = 3000;

const dt = require('./own_modules/myfirstmodule');
const url = require('url');

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write("<p style='margin-top: 20px;'>The date and time are currently : " + dt.myDateTime() + "</p><br>");

    fs.readFile('h03t05.html', function(error, data) {
        if(error) {
            response.writeHead(404);
            response.writeHead('Error: File not found');
        } else {
            response.write(data);

            let q = url.parse(request.url, true).query;
            let text = "Annoit nimen : " + q.name;
            response.write(text);
            response.end();
        }
    });
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(error) {
        if(error) throw error;
        console.log('saved to file1');
    });
    fs.open('mynewfile2.txt', 'w', function(error, file) {
        if(error) throw error;
        console.log('saved to file2');
    });
    fs.writeFile('mynewfile3.txt', 'Hello Content!', function(error) {
        if(error) throw error;
        console.log('saved to file3');
        
    });
    fs.appendFile('mynewfile1.txt', 'This is my text', function(error) {
        if(error) throw error;
        console.log('file1 updated');
        console.log("");
    });
    fs.writeFile('mynewfile3.txt', 'This is my text', function(error) {
        if(error) throw error;
        console.log('file3 replaced');
    });
    /*fs.unlink('mynewfile2.txt', function(error) {
        if(error) throw error;
        console.log('file2 deleted');
    });*/
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(error) {
        if(error) throw error;
        console.log("file1 renamed");
    });
    adr = 'http://localhost:3000/default.htm?year=2017&month=february';
    let q = url.parse(adr, true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    let qdata = q.query;
    console.log(qdata);
});
server.listen(port, function(error) {
    if(error) {
        console.log('something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
