const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mensagens', (req, res) =>{
    const { remetente, destinatario, texto } = req.body;

    console.log(`Mensagengem do remetente para ${destinatario} : ${texto}`);

    res.status(200).json({
        sucesso: true,
        mensagem: "Enviado com sucesso!"
    });

    app.listen(3000, ()=>{
        console.log("Servidor rodando em http//localhost:3000");
    });
});
