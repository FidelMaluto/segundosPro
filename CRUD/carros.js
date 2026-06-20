const express = require('express');
//
const server = express();
//
server.use(express.json());

//ARREY DE CARROS
const carros = ["Porsch", "Ferrari", "Lamborginni", "Bogat"];

//RETORNANDO TODOS OS ITENS
server.get('/carros', (req, res) =>{
    return res.json(carros);
});

//RETORNANDO UM ITEM DO ARREY
server.get('/carros/:id', (req, res) =>{
    const { id } = req.params;//RECEBENDO VALORES NA URL
    
    return res.json(carros[id]);
});

//POSTAR OU ADICIONAR ITEM
server.post('/carros', (req, res) =>{
    const { name } = req.body;//REQUISIÇÃO DO BODY
    carros.push(name);//ADICIONANDO ITEM

    return res.json(carros)
});

//ATUALIZAR OU EDITAR ITEM
server.put('/carros/:id', (req, res) =>{
    const { id } = req.params;//PEGANDO V EXTERNOS(NA URL OU CAMINHO)
    const { name } = req.body;//REQUISIÇÃO DO BODY

    carros[id] = name;

    return res.json(carros);
});

//DELETANDO UM ITEM DO ARREY
server.delete('/carros/:id', (req, res) =>{
    const { id } = req.params;//PEGANDO VALORES NA URL
    carros.splice(id, 1);//MÉTODOS JS DE EXCLUSÃO

    return res.json({
        mensagem: "Carro deletado com sucesso!"
    });
});

server.listen(3003, () => {
    console.log(`Servidor rodando em: http://localhost:3003`);
});
