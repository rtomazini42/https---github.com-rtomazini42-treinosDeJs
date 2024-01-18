//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(tipoItem,danoItem, resistenciaItem ) {
            this.Dano = danoItem;
            this.Tipo = tipoItem;
            this.Resistecia = resistenciaItem;
    
      }
    
      calcularDano() {
        return this.Tipo === 'arma' ? this.Dano * 2 : this.Dano;
      }
    }
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = gets();
    const danoItem = parseInt(gets());
    const resistenciaItem = parseInt(gets());
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
    let itemNovo = new ItemMagico(tipoItem,danoItem, resistenciaItem );
    
    // TODO: Imprima os atributos do item personalizado
    print("Tipo: " + itemNovo.Tipo);
    print("Dano: " + itemNovo.Dano);
    print("Resistencia: " + itemNovo.Resistecia);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = itemNovo.calcularDano();
    print("Dano em combate: " + danoTotal);