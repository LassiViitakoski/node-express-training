exports.connectionToMySql = function(connection, search_term) {
    return new Promise(resolve => {
        connection.connect(function(error) {
            if(error) throw error;
            console.log("Connected to MySQL");

            //let sql = "SELECT * FROM customers WHERE name = ?";
            let sql = "SELECT * FROM customers";
            connection.query(sql, [search_term] ,function(error, data) {
                if(error) throw error;
                
                connection.end();
                console.log(data);
                resolve(data);
            });
        });
    });
    
}