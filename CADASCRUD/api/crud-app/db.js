import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angola@123',
    database: 'login'
});

db.connect(err =>{
    if(err) throw err;
    console.log('MYSQL Conectado!');
});

module.exports = db;
