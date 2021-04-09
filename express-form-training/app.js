const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

//for parsing multipart/form-data
app.use(upload.array());

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})
app.post('/api', function(req, res) {
    console.log(req.body.textbox);
    res.send("received your request!");
})

const server = app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})