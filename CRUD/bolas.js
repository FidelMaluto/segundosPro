const express = require('express');
const app = express();

app.use(express.json());

const bolas = [
    "Micasa",
    "Nike",
    "Adidas",
    "Balão",
    "Basquete"
];

app.get('/bolas', (req, res) => {
    return res.json(bolas);
});

app.get('/bola/:id', (req, res) => {
    const { id } = req.params;

    return res.json(bolas[id]);
});

app.post('/bola', (req, res) => {
    const { bol } = req.body;

    bolas.push(bol);

    return res.json(bolas);
});

app.put('/bola/:id', (req, res) => {
    const { id } = req.params;
    const { bol } = req.body;

    bolas[id] = bol;

    return res.json(bolas);
});

app.delete('/bola/:id', (req, res) => {
    const { id } = req.params;

    bolas.splice(id, 1);

    return res.json({message: "Deletado!"});
})

app.listen(3110, () => {
    console.log(`App rodando em: http://localhost:3110`);
});
