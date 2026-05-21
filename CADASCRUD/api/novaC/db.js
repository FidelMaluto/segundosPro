const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Angola@123",
    database: "testdb"
});

db.connect(err =>{
    if(err) throw err;
    console.log("Conectado ao MYSQL");
});

module.exports = db;
