const fs = require('fs');

fs.writeFileSync('test.txt', 'fidel maluto');

fs.appendFileSync('test.txt', 'deby076')

const leitura = fs.readFileSync('test.txt', {encoding: "utf-8"})
console.log(leitura);