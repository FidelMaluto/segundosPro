const express = require('express');

const app = express();

app.use(express.json());
// Array como banco
const frutas = ['Pera', 'Banana', 'Manga', 'Abacate', 'Ananás'];
// Método GET geral --- pegar todos
app.get('/frutas', (req, res) => {
    return res.json(frutas);
});
// Método GET único/específico --- pegar apenas um
app.get('/fruta/:id', (req, res) => {
    const { id } = req.params;

    return res.json(frutas[id]);
});
// Método PUSH --- cadastrar
app.post('/fruta', (req, res) => {
    const { fruta } = req.body;
    frutas.push(fruta);

    return res.json(fruta);
});
// Método PUT --- atualizar/editar
app.put('/fruta/:id', (req, res) => {
    const { id } = req.params;
    const { fruta } = req.body;

    frutas[id] = fruta;

    return res.json(fruta);
});
// Método DELETE --- apagar
app.delete('/fruta/:id', (req, res) => {
    const { id } = req.params;
    frutas.splice(id, 1);

    return res.json({message: 'Apagado com sucesso!'});
})
// Escotando a porta 3000
app.listen(3000, () => {
    console.log(`App rodando em: http://localhost:3000`)
} 
);