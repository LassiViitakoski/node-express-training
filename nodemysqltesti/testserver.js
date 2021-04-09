const http = require('http');
const fs = require('fs');
const url = require('url');
const uc = require('upper-case');
const port = 3000;
const events = require('events');
const formidable = require('formidable');

let eventEmitter = new events.EventEmitter();

let myEventHandler = () => console.log("I hear scream");
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');

const server = http.createServer(function(request, response) {
    let q = url.parse(request.url, true);
    let filename = "." + q.pathname;
    console.log(filename);
    
    fs.readFile(filename, function(error, data) {
        if(error) {
            response.writeHead(404, {'Content-Type':'text/html'});
            return response.end("404 not found");
        }
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        response.write(uc.upperCase('Hello World'));
        return response.end();
    });
    /*if(request.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(request, function(error, fields, files) {
            let oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Lassi Viitakoski/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(error) {
                if(error) throw error;
                response.write("File uploaded and moved");
                response.end();
            })
        })
    } else {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
        response.write("<input type='file' name='filetoupload' value='Selaa tiedostoja'><br>");
        response.write("<input type='submit' value='Tallenna'>");
        response.write("</form>");
        return response.end();
    }*/
});
server.listen(port, function(error) {
    if(error) throw error;
    else console.log("Server is listening port : " + port);
});
let rs = fs.createReadStream('demofile.txt');
rs.on('open', function() {
    console.log('The file is open');
});


