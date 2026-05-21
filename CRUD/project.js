const express = require("express");// importando o express
const uuid = require("uuid");//importando o uuid
const port = 3033;

const app = express();// criando uma instância

app.use(express.json());//middleware que permite o formato json

const users = [];//arrey de usuários

// rota de pegar todos elementos do arrey
app.get("/users", (req, res) =>{
    return res.json(users);
});

//adicionando usuários no arrey
app.post("/users", (req, res) =>{
    const { name, age, num} = req.body;
    const user = {id: uuid.v4(), name, age, num}
    //console.log(uuid.v4());
    users.push(user);

    return res.status(201).json(user);
});

//atualizando um usuário do arrey
app.put("/users/:id", (req, res) =>{
    const { id } = req.params;
    const { name, age, num } = req.body;

    const updateUser = { id, name, age, num }

    const index = users.findIndex(user => user.id === id);

    if(index < 0){
        return res.status(404).json({message: "User Not Found"});
    }
        
    users[index] = updateUser;

    return res.json(updateUser);
})

//deletando um usuário
app.delete("/users/:id", (req, res) =>{
    const { id } = req.params;

    const index = users.findIndex(user => user.id === id);

    if(index < 0){
        return res.status(404).json({message: "User Not Found"});
    };

    users.splice(index, 1);

    return res.status(204).json({message: "User deletado"})
});

app.listen(3033, ()=>{
    console.log(`App rodando na porta: ${port}`);
});
