exports.connectionToMySql = function(connection, search_term) {
    return new Promise(resolve => {
        connection.connect(function(error) {
            if(error) throw error;
            console.log("Connected to MySQL");

            let sql = "SELECT * FROM customers WHERE name = ?";
            connection.query(sql, [search_term] ,function(error, data) {
                if(error) throw error;
                
                connection.end();
                resolve(data);
            });
        });
    });
    
}