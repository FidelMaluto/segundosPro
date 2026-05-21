import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angola@123',
    database: 'farmacia'
});
