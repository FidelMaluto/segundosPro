const express = require("express");

const server = express();

server.use(express.json());

const cadeira = ["LP", "Inglês", "Matemática", "TLP"];

server.get('/cadeira', (req, res) =>{
    return res.json(cadeira);
});

server.get('/cadeira/:id', (req, res) =>{
    const { id } = req.params;

    return res.json(cadeira[id]);
});

server.post('/cadeira', (req, res) =>{
    const { name } = req.body;
    cadeira.push(name);

    return res.json(cadeira);
});

server.put('/cadeira/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;

    cadeira[id] = name;

    return res.json(cadeira);
});

server.delete('/cadeira/:id', (req, res) =>{
    const { id } = req.params;
    cadeira.splice(id, 1);

    return res.json({mensagem:"Deletado!"});
})

server.listen(3456);