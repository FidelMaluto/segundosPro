const dateFormatter = require('platzidate');

console.log('Timestamp: ', dateFormatter.getTimestamp());
console.log('Data em Português: ', dateFormatter.getLongTime());
console.log(' date in Inglish: ', dateFormatter.getLongTime('en-US'));