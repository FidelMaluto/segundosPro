import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Angola@123",
    database: "crud"
});

db.connect((err) =>{
    if(err){
        console.log("Erro ao conectar com o banco" ,err)
        return;
    }
    return console.log("Conectado com sucesso.");
})
