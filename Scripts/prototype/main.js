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

