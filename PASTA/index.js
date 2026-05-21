const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//ARREY DAS SMS
let mensagens = []; //ARMAZENANDO AS SMS

app.get('/mensagens', (req, res) =>{
    return res.json(mensagens);
})

//ENVIAR MSM
app.post('/mensagem', (req, res) =>{
    const { remetente, destinatario, texto} = req.body;//REQUISIÇÃO DO USUARIO

    if(!remetente || !destinatario || !texto){
        res.status(400).json({erro:" Preencha os campos!"});
    }

    //ADICIONANDO NOVA SMS
    const NovaSMS = {
        id: mensagens.length + 1,
        remetente,
        destinatario,
        texto,
        dataEnvio: new Date()
    };

    //RECEBENDO AS SMS
    mensagens.push(NovaSMS);

    res.status(201).json({mensagem:"Mensagem enviada!", dados: NovaSMS});
});

app.put('/mensagem/:nome', (req, res) =>{
    const { nome } = req.params;
    const { remetente, destinatario, texto } = req.body;

    mensagens[nome] = ( remetente, destinatario, texto )

    return res.status(204).json(mensagens[nome]);
});

//REOTRNAR OU LISTAR AS MENSAGENS PARA O DESTINÁTARIO
app.get('/mensagens/:destinatario', (req, res) =>{
    const { destinatario } = req.params;
    const recebidas = mensagens.filter(m => m.destinatario === destinatario);

    res.json(recebidas);
});

app.listen(3303, () =>{
    console.log("Servidor rodando em http://localhost:3303");
});
