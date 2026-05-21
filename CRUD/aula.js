const express = require("express");

const port = 3030; 

const app = express();

app.use(express.json());

//QUERY PARAMS
app.get('/users', (req, res) =>{
    //const name = req.query.name;
    //const age = req.query.age;
    const { name, age, num, surname} = req.query;

    console.log(name, age, num, surname);

    return res.json({name, age, num, surname});
});

//ROUTE PARAMS
app.get('/users/:id', (req, res) =>{
    const { id } = req.params;

    console.log(id)

    return res.json({id})
});

//BODY PARAMS
app.get('/users', (req, res) =>{
    //const {name, age, num, surname} = req.query;
    console.log(req.body);
    //console.log(name, age, num, surname)

    //return res.json({name, age, num, surname});
    return res.json({mensagem:"Boa"})
});

app.listen(3030, ()=>{
    console.log(`Rodando na porta ${port}`);
});
