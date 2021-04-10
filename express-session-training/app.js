require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const mysql_store = require('express-mysql-session')(session);

const options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
}
const session_store = new mysql_store({
    clearExpired: true,
    checkExpirationInterval: 1000 * 60,
    expiration: 1000 * 60 * 60
}, options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: session_store,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 6
    }
}));

app.get('/', (req, res) => {
    console.log(req.session);
    let session = req.session;
    if(session.email) return res.send('email session : ' + session.email);
    res.send('emailia ei löytynyt sessionista');
})
app.get('/setsession', (req, res) => {
    req.session.email = 'lassi.viitakoski@gmail.com';
    res.send('session asetettu');
})

const server = app.listen(8080, () => {
    console.log("Server running on port : " + server.address().port);
})