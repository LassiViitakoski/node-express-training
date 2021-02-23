/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const { allowedNodeEnvironmentFlags } = require('process');
const path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));

//const cookieParser = require('cookie-parser');

app.use(express.static('public'));
//app.use(cookieParser());

//Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended : false }));

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './storage');
    },
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });
//app.use(multer({ dest: '/tmp/' }));


app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});
app.post('/db_connection'), function(req, res) {
    console.log("Ajaxi toimii");
}


app.get('/', function(req, res) {
    console.log('Got a GET request for the homepage');
    res.send('Hello World!');
});
app.post('/', function(req, res) {
    console.log('Got a POST request for the homepage');
    res.send('Hello POST!');
});
app.delete('/del_user', function(req, res) {
    console.log('Got a DELETE request for /del_user');
    res.send('Hello DELETE!');
});
app.get('/list_user', function(req, res) {
    console.log('Got a GET request for /list_user');
    res.send('Page listening');
});
app.get('/ab*cd', function(req, res) {
    console.log('Got a GET request for /ab*cd');
    res.send('Page Pattern Match');
});
app.get('/process_get', function(req, res) {
    //prepare output in JSON format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post('/process_post', function(req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.write(response.last_name + "<br>");
    res.write(JSON.stringify(response.last_name) + "<br>");
    res.end(JSON.stringify(response));
});
app.get('/index2.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'html/index2.html');
});
app.post('/file_upload', upload.single('file'), function(req, res) {
    console.log(req.file);
    console.log(req.file.path);
    console.log(req.file.type);
    let file = __dirname + '/' + req.file.name;
    console.log(file);
    console.log(req.file.name);
    fs.readFile(req.file.path, function(error, data) {
        res.write(data);
        fs.writeFile(file, data, function(error) {
            if(error) {
                console.log("error : " + error);
            } else {
                response = {
                    message: 'File uploaded succesfully',
                    filename: req.file.name
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});
/*app.post('/file_upload', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if(!file) {
        const error = new Error('Please upload file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
});

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://" + host + port);
});*/