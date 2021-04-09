require('dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const mysql_store = require('express-mysql-session')(session);

const options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}

const connection = mysql.createConnection(options);
const session_store = new mysql_store({
    createDatabaseTable: true,
    expiration: 6000000
}, connection);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    store: session_store,
    resave: false,
    saveUninitialized: true
}));

const server = app.listen(8080, () => {
    console.log("Server running on port : " + server.address().port);
})