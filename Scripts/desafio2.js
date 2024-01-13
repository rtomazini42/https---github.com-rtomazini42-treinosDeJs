var precoCombustivel;
var kmPorLitro;
var distancia;
var tipoCombustivel;


precoGasolina= 5.29;
precoEtanol = 4.79;

function precoTotal(distancia, tipoCombustivel){
    if (tipoCombustivel == 'gasolina'){
        kmPorLitro = 15;
        let aux = distancia/kmPorLitro;
        return aux*precoGasolina;
    }
    if (tipoCombustivel == 'etanol'){
        kmPorLitro = 10.5;
        let aux = distancia/kmPorLitro;
        return aux*precoEtanol;
    }
    
}

distancia = 146;
tipoCombustivel = 'etanol';
console.log(precoTotal(distancia, tipoCombustivel));

distancia = 146;
tipoCombustivel = 'gasolina';
console.log(precoTotal(distancia,tipoCombustivel));