const express = require("express");

const server = express();

server.get("/", (req, res) =>{
    return res.send("Olá mundo!");
});

server.listen(3000, ()=>{
    return console.log(`O servidor está rodando na porta http://localhost:3000`);
});