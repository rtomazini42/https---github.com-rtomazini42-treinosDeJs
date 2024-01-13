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

function compararIdade(p1,p2){
    if(p1.Idade > p2.Idade){
        console.log(`${p1.Nome} é mais velho que ${p2.Nome}`)
    }
    else if(p1.Idade < p2.Idade){
        console.log(`${p2.Nome} é mais velho que ${p1.Nome}`)
    } else {
        console.log(`${p2.Nome} tem idade igual que ${p1.Nome}`)
    }
}

const Renan = new Pessoa('Renan Tomazini',26);
const Giuliana = new Pessoa('Giuliana Tomazini',16);
compararIdade(Renan,Giuliana);