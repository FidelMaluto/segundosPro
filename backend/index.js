let express = require('express');
let server = express();
let filmes = require('./src/data/filmes.json');

// criamdo uma rota de usúarios
server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

//
server.listen(3000, () => {
    console.log('O servidor está funcionando!')
});