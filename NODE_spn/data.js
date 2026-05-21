const dateFormatter = require('dataatual');

console.log('TimeStamp: ', dateFormatter.getTimeStamp());
console.log('Data em Português: ', dateFormatter.getLongTime())
console.log('Data em outro idioma: ', dateFormatter.getLongTime('es-es'))
