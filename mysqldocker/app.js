const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/', (req, res) => {
    connection.connect(error => {
        if(error) throw error;
        console.log("MySQL connected succesfully");
        res.send("mysql toimii!!!");
    })
})

const connection = mysql.createConnection({
    host: '91.153.108.196',
    user: 'lassiviitakoski',
    password: 'Kikkeli1!',
    database: 'online_store_database',
    port: 8080
})


const server = app.listen(3000, () => {
    console.log("server running on localhost");
})