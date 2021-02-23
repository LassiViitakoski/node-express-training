const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db_config = require('./own_modules/db_config');
const db_connection = require('./own_modules/db_connection');
require('dotenv').config();

//app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + 'public/html/index.html'));
});
app.post('/db_connection', async function(req, res) {
    const connection = db_config.mySQLCredentials();
    let data = await db_connection.connectionToMySql(connection, req.body.search_term);
    res.send(data);
});
const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening at http://" + host + port);
});