class Pessoa{
    Nome;
    Idade;
    constructor(nomeInserido, idadeInserida){
        this.Nome = nomeInserido;
        this.Idade= idadeInserida;
    }
    descrever(){
        console.log('Meu nome é' + this.Nome)
    }
}


const Renan = new Pessoa('Renan Tomazini',26);
console.log(Renan);
