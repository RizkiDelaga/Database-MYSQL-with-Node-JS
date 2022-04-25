const db = require("./db_config");

db.connect((err) => {
    if (err) throw err;
    
    let sql = "INSERT INTO dosen (idDosen, namaDosen, alamat) VALUES ?";
    var values = [
        ['1', 'JS Coffee', 'Highway 71'],
        ['2', '3AM Coffee', 'Lowstreet 4'],
        ['3', 'Apple Cafe', 'Apple st 652'],
        ['4', 'Laravel Coffee', 'Mountain 21'],
        ['5', 'Nodejs Cafe', 'Valley 345'],
        ['6', 'PHP Hotel', 'Ocean blvd 2'],
        ['7', 'One Cafe', 'Green Grass 1'],
        ['8', 'Richard bar', 'Sky st 331'],
        ['9', 'Susan Cafe', 'One way 98'],
        ['10', 'Vicky Club', 'Yellow Garden 2'],
        ['11', 'Ben Resto', 'Park Lane 38'],
        ['12', 'William Company', 'Central st 954'],
        ['13', 'Chuck Food', 'Main Road 989'],
        ['14', 'Viola Coffee', 'Sideway 1633']
    ];
    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});