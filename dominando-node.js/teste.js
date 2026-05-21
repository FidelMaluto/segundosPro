/*const express = require("express");
const server = express();

// query params http:localhost:3000/ola?nome=fidel&idade=18
server.get("/ola", (req, res) =>{
    const {nome, idade} = req.query;

    return res.json({
        title:"olá mundo!",
        message:`olá, ${nome} como vai?`,
        idade:idade,
    });
});

// route params http:localhost:3000/ola/fidel
server.get("/ola/:nome/:idade", (req, res) =>{
    const {nome, idade} = req.params;

    return res.json({
        title:"olá mundo!",
        message:`olá, ${nome} como vai o seu projeto? A sua`,
        idade:idade,
    });
});

server.listen(3000);*/

// elementos de customers no ARREY
const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    {id: 1, name:"Fidel Maluto", site:"http://fidm.com.ao"},
    {id: 2, name:"FDM", site:"http://fdm.com.ao"},
    {id: 3, name:"GOOGLE", site:"http://www.google.com"}
];

server.get("/customers", (req, res) =>{
    return res.json(customers);
});
// pegar elemento pelo respectivo id
server.get("/customers/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    // debugando com o console
    console.debug("GET :: /customers/:id", customer)
    
    return res.status(status).json(customer);

});
// adicionar elemento
server.post("/customers", (req, res) =>{
    const {name, site} = req.body;
    const id = customers[customers.length -1].id + 1;

    const newCustomer = {id, name, site};
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});
//atualizar elemento 
server.put("/customers/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const {name, site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers[index] = {id: parseInt(id), name, site};
    } 
    return res.status(status).json(customers[index]);
    
});
// eliminar elemento
server.delete("/customers/:id", (req, res)=> {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index, 1);
    }
    return res.status(status).json();
})

server.listen(3000);
