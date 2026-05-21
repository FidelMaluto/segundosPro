// MODÚLOS E REQUIRE
// console.log('Inicializando o require!');

// const dados = require('./modulo');
// console.log(dados.nomes);
// console.log(dados.bairros);

// DESESTRUTURAÇÃO

const { texto, bairros, nomes, add } = require('./modulo.js');

console.log(texto);
console.log(bairros);
console.log(nomes);
console.log(add(7));
