// const server = require('http');

// server.createServer((req, res)=>{
//     res.end("OI...")
// }).listen(3000)

const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const data = require('dataatual');

console.log(data.getLongTime());

const server = http.createServer((req, res) =>{
    res.end(`Novo Olá ${data.getLongTime()}`)
});

server.listen(port, host, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
