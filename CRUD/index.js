//IMPORTANDO O 'EXPRESS'
const express = require('express');

const server = express();

server.use(express.json());

//LISTAGEM DE CURSOS
const cursos = ['FRONT-END', 'BACK-END', 'NODE.JS'];

//RETORNAR TODOS OS CURSOS
server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

//RETORNAR UM CURSO
server.get('/cursos/:index', (req, res) =>{
    const { index } = req.params;
    return res.json(cursos[index]);
});

//CRIAR UM NOVO CURSO
server.post('/cursos', (req, res) =>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//ATUALIZAR UM CURSO
server.put('/cursos/:index', (req, res) =>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//DELETAR CURSOS
server.delete('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "Curso deletado com sucesso!"});
});

server.listen(3000);