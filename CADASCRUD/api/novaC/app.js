const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

//CREAT
app.post("/usu", (req, res) =>{
    const { nome, email } = req.body;

    db.query('INSERT INTO testdb(nome, email) VALUES(?,?)', [nome, email], (err, result) =>{
        if(err) return res.status(500).json({erro: "Erro ao cadastrar!"});
        res.json({id: result.insertId, nome, email});
    });
});

//READ
app.get("/usu", (req, res) =>{
    db.query('SELECT * FROM testdb', (err, result) =>{
        if(err) return res.status(500).json({erro: "Erro ao listar!"});
        res.json(result);
    });
});

//UPDATE
app.put("/usu/:id", (req, res) =>{
    const { id } = req.params;
    const { nome, email } = req.body;

    db.query('UPDATE testdb SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if(err) return res.status(500).json({erro: "Erro ao atualizar!"});
        res.json({id, nome, email});
    });
});

//DELETE
app.delete("/usu/:id", (req, res) =>{
    const { id } = req.params;

    db.query('DELETE FROM testdb WHERE id = ?', [id], (err) =>{
        if(err) return res.status(500).json({erro: "Erro ao eliminar!"});
        res.status(200).json({message: "Deletado com sucesso!"});
    });
});

app.listen(3003, () =>{
    console.log("APP RODANDO NA PORTA 3003");
})
