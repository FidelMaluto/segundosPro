const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Teste com WriteStream!')
console.log('Ficheiro criado.')
