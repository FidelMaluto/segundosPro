import express, { json } from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(json());

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Angola@123",
    database: "login"
});

db.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao Banco.!', err);
        return;
    }
    
    return console.log('Conectado com êxito');
})

app.post("/usuario", async (req, res) =>{
    const { nome, email } = req.body;

    try{
        const [result] = await db.execute('INSERT INTO usuario(nome, email) VALUES(?, ?)', [nome, email]);
        res.json({id: result.insertId, nome, email});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao criar usuário!"});
    }
});

app.get("/usuario", async (req, res) =>{
    try{
        const [result] = await db.execute('SELECT * FROM usuario');
        res.json(result);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao ler usuário"});
    }
});

app.put("/usuario/:id", async (req, res) =>{
    const { id } = req.params;
    const { nome, email } = req.body;

    try{
        await db.execute('UPDATE usuario SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
        res.json({id, nome, email });
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao atualizar usuário."});
    }
});

app.delete("/usuario/:id", async (req, res) =>{
    const { id } = req.params;
    try{
        await db.execute('DELETE FROM usuario WHERE id = ?', [id]);
        res.json({message: "Usuário excluído com sucesso."})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Erro ao excluir usuário!"})
    }
});

app.listen(8888, () =>{
    console.log("Servidor executando na porta 8888");
});
