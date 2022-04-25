const db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `UPDATE mahasiswa
               SET alamat='Batam'
               WHERE idMahasiswa=19104073`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});