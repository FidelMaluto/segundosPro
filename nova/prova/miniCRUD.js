const express = require('express');

const app = express();

app.use(express.json());

const frutas = ['Pera', 'Banana', 'Manga', 'Abacate', 'Ananás'];

app.get('/frutas', (req, res) => {
    return res.json(frutas);
});

app.listen(3000, console.log(`App rodando em: http://localhost:3000`));
