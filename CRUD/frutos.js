const express = require('express');

const server = express();

server.use(express.json());

const frutas = ["Manga", "Laranja", "Abacate"];

//BUSCAR TODOS
server.get('/frutos', (req, res) =>{
    return res.json(frutas);
});

//BUSCAR UM
server.get('/frutos/:id', (req, res) =>{
    const { id } = req.params;

    return res.json(frutas[id]);
});

//POSTAR OU ADICIONR
server.post('/frutos', (req, res) =>{
    const { nome } = req.body;
    frutas.push(nome);

    return res.json(frutas)
});

//ATUALIZAR
server.put('/frutos/:id', (req, res) =>{
    const { id } = req.params;
    const { nome } = req.body;

    frutas[id] = nome;

    return res.json(frutas);
});

//DELETAR
server.delete('/frutos/:id', (req, res) =>{
    const { id } = req.params;
    frutas.splice(id, 1);

    return res.json({mensagem: "Excluído com êxito!"})
})

server.listen(3300);
