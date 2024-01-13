const Pessoa = {
    nome: 'Renan Tomazini',
    idade: 2024 - 1998,
    altura: 165,
    descrever: function(){
        console.log('Meu nome é' + this.nome)
    }
};

parametro = 'idade';
console.log(Pessoa['idade']);