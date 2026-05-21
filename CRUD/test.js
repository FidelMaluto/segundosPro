const express = require("express");

const app = express();

app.use(express.json());

const teste = [];

app.get("/teste", (req, res) =>{
    return res.json(teste);
});

app.get("/teste/:id", (req, res) =>{
    const { id } = req.params;

    return res.json(teste[id]);
});

app.post("/teste", (req, res) =>{
    const { name } = req.body;
    teste.push(name);
    
    return res.json(teste);
});

app.put("/teste/:id", (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;

    teste[id] = name;

    return res.json(teste);
});

app.delete("/teste/:id", (req, res) =>{
    const { id } = req.params;
    teste.splice(id, 1);

    return res.json({message:"Item deletado!"})
});

app.listen(3456);
