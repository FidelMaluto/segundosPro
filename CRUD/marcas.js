const express = require('express');// IMPORTANDO O MÓDULO EXPRESS

const server = express();// CRIANDO UMA INSTÂNCIA DO SERVIDOR EXPRESS

server.use(express.json());// MIDDLEWARE QUE PERMITE RECEBER DADOS EM JSON PELO req.body.

// ARRY DE MARCAS // NOSSO BANCO DE DADOS EM MEMÓRIA.
 const marca = ["Anta", "Lacoste", "Adidas", "Nike"];

 //MÉTODOS HTTP GET, para pegar todas as marcas do arrey.
 server.get('/marca', (req, res) =>{
    return res.json(marca);// RETONANDO TODOS OS ARREY.
 });

 //MÉTODO GET, apenas uma marca pelo índice(ID) passado na URL.
 server.get('/marca/:id', (req, res) =>{
    const { id } = req.params;// extraindo o valor do parâmetro id da URL.

    return res.json(marca[id]);// RETORNANDO APENAS UM ELEMENTO DO ARREY.
 });

 // MÉTODO HTTP POST, para postar ou adicionar marcas.
 server.post('/marca', (req, res) =>{
    const { name } = req.body;// adicionando mais uma marca enviado na requisição(JSON)
    marca.push(name);// a constante marca tem que receber o name.

    return res.json(marca);//RETORNANDO O ARREY COM O NOVO ITEM.
 });

 // MÉTODO HTTP PUT, para atualizar uma marca existente.
 server.put('/marca/:id', (req, res) =>{ // ROTA COM O PARÂMETRO id E A FUNÇÃO QUE RECEBE A REQUISIÇÃO E ENVIA A RESOSTA
    const { id } = req.params;// extraindo o valor do parâmetro id da URL.
    const { name } = req.body;// extraindo o campo name enviado na requisição (JSON).

    marca[id] = name;// atualizando a posição id do ARREY marca com o novo nome.

    return res.json(marca);// retornando o ARREY atualizado como resposta JSON.
 });

 // MÉTODO HTTP DELETE, para eliminar uma marca.
 server.delete('/marca/:id', (req, res) =>{
    const { id } = req.params;// pega o id da URL.

    marca.splice(id, 1);// removendo um item do ARREY a partir da posição do ID.

    return res.json({mensagem:"Deletado com sucesso!"})// retornando uma mensagem.
 });

 server.listen(3333);// iniciando o servidor e escutando na porta 3333.
