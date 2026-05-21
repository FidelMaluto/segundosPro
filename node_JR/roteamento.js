const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    res.setHeader('content-type', 'text/html');

    let html_file = '';

    switch (req.url) {
        case '/':
            html_file = './pages_html/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            html_file = './pages_html/about.html';
            res.statusCode = 200;
            break;
    
        default:
            html_file = './pages_html/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(html_file, (err, data) =>{
        if(err){
            console.log('Algo deu errado');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () =>{
    console.log('Servidor iniciado.');
});
