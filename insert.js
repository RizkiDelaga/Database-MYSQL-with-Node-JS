const db = require("./db_config");

db.connect((err) => {
    if (err) throw err;
    
    let sql = `
    INSERT INTO mahasiswa (idMahasiswa, namaMahasiswa, alamat) VALUES ('1236132', 'Rizki Delaga', 'Bida Kharisma, Batam Kota')
    `;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});