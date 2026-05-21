const fs = require('fs');

const data = fs.readFileSync('exemplo.txt', 'utf8');
console.log('File Content: ', data);
