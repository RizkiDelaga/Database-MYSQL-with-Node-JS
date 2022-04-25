const db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `DELETE FROM mahasiswa WHERE idMahasiswa=123`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});