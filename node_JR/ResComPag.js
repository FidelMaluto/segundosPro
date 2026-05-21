const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{

    // preparando o header da resposta
    res.setHeader('content-type', 'text/html');

    // preparando o conteúdo html da página
    fs.readFile('./pages_html/index.html', (err, data) =>{
        if(err){
            console.log('Algo deu errado!');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () =>{
    console.log('Servidor rodando.');
});
