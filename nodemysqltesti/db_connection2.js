const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kikkeli',
    database: 'mydatabase',
    port: 3306
});
connection.connect(function(error) {
    if(error) throw error;
    console.log("Connected");
    /*let adr = 'Taivaanranta 15';
    let name = 'Lassi Viitakoski';
    let sql = "SELECT * FROM customers WHERE address = ? OR name = ?";
    
    connection.query(sql, [adr, name], function(error, results, fields) {
        if(error) throw error;
        
        console.log(results);
        
    });*/
    let sql = "SELECT * FROM customers";
    connection.query(sql, function(error, results) {
        if(error) throw error;
        console.log(results);
    })
});


//host : 'localhost',
//user: 'root',
//password: 'kikkeli',
//database: 'mydatabase',
//port : 3306