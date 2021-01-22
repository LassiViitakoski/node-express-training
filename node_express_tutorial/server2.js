const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db_config = require('./own_modules/db_config');
const db_connection = require('./own_modules/db_connection');

//app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + '/index.html'));
});

app.post('/db_connection', async function(req, res) {
    let search_term = req.body.search_term;
    const connection = db_config.mySQLCredentials();
    
    let data = await db_connection.connectionToMySql(connection);
    //let results = JSON.stringify(data);
    
    let h = "<h1 style='background-color:red;color:whitesmoke;margin:20px;border:20px solid red;'>AsiakasTaulukko</h1>";
    let str = "<table style='margin-left:20px;'>";
    let row = "";
        
    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        for(let key in obj) {
            console.log(key);
            console.log(obj[key]);
        }
    }
    
});

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://" + host + port);
});