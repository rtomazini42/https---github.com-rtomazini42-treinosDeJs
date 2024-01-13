class Pessoa{
    Nome;
    Idade;

    descrever(){
        console.log('Meu nome é' + this.Nome)
    }
}


const Renan = new Pessoa();
Renan.Nome = 'Renan Tomazini';
Renan.Idade = 26;

console.log(Renan);
