// STREAMS (readStream and writeStream)
const fs = require('fs');

const readStream = fs.createReadStream('./path2.csv', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('output2.txt');

readStream.on('data', (dados) =>{
    // console.log('#####################################################');
    // console.log(dados);
    writeStream.write('\n --------------------------------------------------- \n');
    writeStream.write(dados)
});

console.log('Ficheiro criado.');