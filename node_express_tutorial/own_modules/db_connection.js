exports.connectionToMySql = function(connection) {
    return new Promise(resolve => {
        connection.connect(function(error) {
            if(error) throw error;
            console.log("Connected to MySQL");
    
            let sql = "SELECT * FROM customers";
            connection.query(sql, function(error, data) {
                if(error) throw error;
                
                connection.end();
                //console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    })
    
}