import mysql from "mysql";
// criação da conexão com o MYSQL e a determinada Base d'Dados
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Angola@123",
    database: "crud"
});

