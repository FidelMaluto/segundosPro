const express = require('express');

const app = express();

app.use(express.json());

const frutas = ['Pera', 'Banana', 'Manga', 'Abacate', 'Ananás'];

app.get('/frutas', (req, res) => {
    return res.json(frutas);
});

app.get('/fruta/:id', (req, res) => {
    const { id } = req.params;

    return res.json(frutas[id]);
});

app.post('/fruta', (req, res) => {
    const { fruta } = req.body;
    frutas.push(fruta);

    return res.json(fruta);
})

app.listen(3000, () => {
    console.log(`App rodando em: http://localhost:3000`)
} 
);