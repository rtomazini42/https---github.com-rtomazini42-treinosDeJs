//prototipo é a base do objeto

const carro ={
    material: 'ferro'
}

const celta = {
    placa : 'abc-1234',
    origem : 'Recife',
    __proto__: carro
}

console.log(celta.material)

//função construtora
function Carro(nome, placa){
    this.nome = nome;
    this.placa = placa;
}

const carroNovo = new Carro('Fiat uno', 'vde-1234');
console.log(carroNovo);


Carro.prototype.andar = function(){
    console.log(`Andando com ${this.nome}`);
}

carroNovo.andar();

//outra maneira

class Moto{
    constructor(nome,placa){
        this.nome = nome
        this.placa = placa
    }

    andar(){
        console.log(`Andando com ${this.nome}`);
    }
}

const motoNova = new Moto('biz', 'aaa-1111');
motoNova.andar();