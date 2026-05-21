// const os = require('os');

//console.log(os)
//console.log(os.totalmem())

// NodeJS módulo FileSystem
const fs = require('fs');

// VERIFICANDO SE O FICHEIRO EXIS
// if(fs.existsSync('./path.csv')){
//     //REDING FileSystem
//     let dados = fs.readFileSync('./path.csv', )
//     console.log(dados.toString())
// } else {
//     console.log('Ficheiro não encontrado.')
// }

// WRITE FILE -- APPEND FILE
//  fs.writeFile('./path.csv', 'FIDEL MALUTO', () =>{
//      console.log('Ficheiro criado!');
//  })

// fs.writeFileSync('./path2.csv', 'DMALUTO')

//  fs.appendFile('./path.csv', 'FIDEL\n', (err) =>{
//     if(err){
//         console.log(err)
//     } else {console.log('Adicionado com sucesso.')}
     
//  })

fs.appendFileSync('./path2.csv', 'FIDEL \n')

console.log('Fim da função.')
