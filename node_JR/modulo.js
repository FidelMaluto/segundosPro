const nomes = ['Fidel', 'Domingos', 'Maluto'];
const bairros = ['Zango', 'Zango 1', 'Zango 2'];
const texto = 'Olá Desestruturação';

function add(a, i){
   for(i = 0; i <= 10; i++){
      console.log(a * i)
   }
}

module.exports = { nomes, bairros, texto, add }
