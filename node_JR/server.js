const http = require('http');

const server = http.createServer((req, res) =>{
    // console.log(req.url);
    res.setHeader('Content-Type', 'text/html; charset= utf-8')
    res.write("<h2>testando</h2>")
    res.write('<h4>mais conteúdo...</h4>')
    res.write('<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem delectus illum laudantium eius pariatur fuga eligendi rerum doloremque debitis reprehenderit, cum sit consectetur deserunt tempora adipisci non culpa nulla.</p>')
    res.end();
});

server.listen(3000, 'localhost', () =>{
    console.log('Servidor rodando...');
});
