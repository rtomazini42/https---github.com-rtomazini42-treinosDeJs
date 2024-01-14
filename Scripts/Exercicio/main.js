//const funcoes = require('../importar/auxiliares');

//chamar sem oprecisar da variavel abaixo

const {gets, print} =  require('../importar/auxiliares');

const numerosSoteados = [];

for(let i = 0; i<5; i++){
    let numerosSoteado = gets();
    numerosSoteados.push(numerosSoteado);
}

console.log(numerosSoteados);

