const express = require("express");

const app = express();

const port = 3333;

app.use(express.json());

const merca = [];

app.get('/merca', (req, res) =>{
    return res.json(merca);
});

app.get('/merca/:id', (req, res) =>{
    const { id } = req.params;
    const index = merca.findIndex(merc => merc.id === id)

    if(id !== index){
        return res.status(404).json({
            message: "Id not found!"
        })
    }

    return res.status(201).json(merca[id]);
});

app.post('/merca', (req, res) =>{
    const  {name } = req.body;
    merca.push(name);

    return res.json(merca);
});

app.put('/merca/:id', (req, res) =>{
    const { id } = req.params;
    const { name } = req.body;

    merca[id] = name;

    return res.status(201).json(merca);
});

app.delete('/merca/:id', (req, res) =>{
    const { id } = req.params;
    merca.splice(id, 1);

    return res.json({
        message: "Item removido!"
    })
})

app.listen(3333, () =>{
    console.log(`App executando na porta: ${port} em http://localhost:${port}`)
});
