const db = require("./db_config");


const data = db.connect((err) => {
    if (err) throw err;

    const arrDataDosen = []
    let sql = "SELECT * FROM dosen";
    db.query(sql, (err, result) => {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            // console.log("\n---------- Data Ke-"+ i +" ----------");
            // console.log("ID Dosen\t: ", result[i].idDosen);
            // console.log("Nama Dosen\t: ", result[i].namaDosen);
            // console.log("Alamat\t: ", result[i].alamat);
            // console.log("--------------------------------");

            arrDataDosen.push({id: `${result[i].idDosen}`, Nama:`${result[i].namaDosen}`, Alamat:`${result[i].alamat}`})
        }
        // console.log(arrDataDosen);
        // console.log(arrDataDosen[0].Nama);
        console.log(arrDataDosen)
        // return arrDataDosen
    });
});





module.exports = data;