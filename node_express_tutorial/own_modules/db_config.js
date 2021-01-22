const mysql = require('mysql');

exports.mySQLCredentials = () => {
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'kikkeli',
        database : 'mydatabase',
        port: 3306
    });
    return connection;
}