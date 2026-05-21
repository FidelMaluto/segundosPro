import express from "express";
import cors from "cors";
import {db} from "../db.js";

const app = express();
app.use(cors());
app.use(express.static('public'));

//creat
app.post('/tasks', (req, res) =>{
    const { title } = req.body;

    db.query('insert into tasks(title) values(?)', [title], (err) =>{
        if(err) throw err;

        res.json({message: "Tarefa Adicionada"})
    });
});

//read
app.get('/tasks', (req, res) =>{
    db.query('select * from tasks', (err, results) =>{
        if(err) throw err;
        res.json(results);
    });
});

//update
app.put('/tasks/:id', (req, res) =>{
    const { title } = req.body;
    db.query('update tasks set title = ? where id = ?', [title, req.params.id], (err) =>{
        if(err) throw err;
        res.json({message: "Tarefa Atualizado."});
    });
});

//delete
app.delete('/tasks/:id', (req, res) =>{
    db.query('delete from tasks where id = ?', [req.params.id], (err) =>{
        if(err) throw err;
        res.json({message: "Tarefa Excluída."});
    });
});

app.listen(8888, ()=>{
    console.log('Servidor rodando em http://localhost:8888');
})
