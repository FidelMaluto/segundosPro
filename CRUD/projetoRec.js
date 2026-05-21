const express = require('express');
const app = express();

app.use(express.json());

const users = [];

// Rota GET
app.get('/users', (req, res) => {
    return res.status(200).json(users);
});

// Rota POST
app.post('/users', (req, res) => {
    const { name, age } = req.body;

    const user = { name, age }
    users.push(user);
    return res.status(201).json({ message: "User Created." })
});

// Rota PUT
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const updateUser = { name, age }
    // const index = users.findIndex(user => user.id === id);

    // if (index < 0) {
    //     return res.status(404).json({ message: "User Not Found." });
    // }

    users[id] = updateUser;

    return res.json({message: "UpToDate!"});
});

// Rota DELETE
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    // const index = users.findIndex(user => user.id === id);

    // if (index < 0) {
    //     return res.status(404).json({ message: "User Not Found." });
    // }

    users.splice(id, 1);

    return res.status(204).json();
});

app.listen(3000, () => {
    console.log(`Servidor rodando em: http://localhost:3000/users`);
});
