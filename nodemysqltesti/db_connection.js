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
    //let sql = "insert into customers (name,address) values ?";
    /*let values = [
        ['Miska Mäkinen','Taivaanranta 15'],
        ['Elmer Tuukkanen','Kivääritehtaankatu 8D 11'],
        ['Jere Luukkonen','Piippukatu 8'],
        ['Teemu Romo','Espoonkatu 10'],
    ];*/
    let sql = "INSERT INTO customers (name,address) values ('Michelle','Blue Village 1')";
    connection.query(sql, function(error, results) {
        if(error) throw error;
        console.log("Table created");
        if(results.affectedRows == 1) console.log("1 record inserted, ID : " + results.insertId);
    });
});


//host : 'localhost',
//user: 'root',
//password: 'kikkeli',
//database: 'mydatabase',
//port : 3306