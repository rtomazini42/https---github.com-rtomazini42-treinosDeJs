var precoCombustivel;
var kmPorLitro;
var distancia;


precoCombustivel = 5.29;
kmPorLitro = 8;

function precoTotal(distancia){
    let aux = distancia/kmPorLitro;
    return aux*precoCombustivel;
}

distancia = 146;
console.log(precoTotal(distancia));