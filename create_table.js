const db = require("./db_config");

db.connect((err) => {
    if (err) throw err;
    
    let sql = `
    
    `;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});