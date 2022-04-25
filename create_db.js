const db = require("./db_config");


db.connect((err) => {
    if (err) throw err;
    
    let sql = "CREATE DATABASE universitas";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});