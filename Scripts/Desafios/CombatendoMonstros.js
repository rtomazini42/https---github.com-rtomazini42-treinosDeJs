//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
function  jogar(){
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
  if (jogadaPersonagem > jogadaMonstro) {
    return "Você venceu a batalha!";
  } 
    else if (jogadaPersonagem == jogadaMonstro) {
    return "Foi um empate!";
  } 
    else if (jogadaPersonagem < jogadaMonstro) {
    return "Você perdeu a batalha!";
  } 

}

// TODO: Agora chame a função para realizar o combate para exibir o resultado:
var resultado =  jogar();
print(resultado);