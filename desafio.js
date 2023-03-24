/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let usuarioCartas = []
let computadorCartas = []

let usuarioPontuacao = 0
let computadorPontuacao = 0

console.log("Bem-vindo ao jogo de Blackjack!")

// Sorteia duas cartas para o usuário
while (usuarioPontuacao < 21) {
  let carta = comprarCarta()
  usuarioCartas.push(carta.texto)
  usuarioPontuacao += carta.valor

  if (usuarioCartas.length === 2 && usuarioPontuacao === 22) {
    console.log("Usuário - cartas: ", usuarioCartas.join(" "), " - pontuação: ", usuarioPontuacao)
    usuarioCartas = []
    usuarioPontuacao = 0
  } else if (usuarioPontuacao >= 21) {
    break
  } else {
    let comprarNovaCarta = confirm(
      "Suas cartas são " + usuarioCartas.join(" ") + ". A carta revelada do computador é " + comprarCarta().texto + "." +
      "\n" +
      "Deseja comprar mais uma carta?"
    )

    if (!comprarNovaCarta) {
      break
    }
  }
}

// Sorteia duas cartas para o computador
while (computadorPontuacao < 21 && usuarioPontuacao <= 21) {
  let carta = comprarCarta()
  computadorCartas.push(carta.texto)
  computadorPontuacao += carta.valor

  if (computadorCartas.length === 2 && computadorPontuacao === 22) {
    console.log("Computador - cartas: ", computadorCartas.join(" "), " - pontuação: ", computadorPontuacao)
    computadorCartas = []
    computadorPontuacao = 0
  } else if (computadorPontuacao >= 21) {
    break
  }
}

// Mostra as cartas e pontuação de cada jogador
console.log("Usuário - cartas: ", usuarioCartas.join(" "), " - pontuação: ", usuarioPontuacao)
console.log("Computador - cartas: ", computadorCartas.join(" "), " - pontuação: ", computadorPontuacao)

// Verifica quem ganhou
if ((usuarioPontuacao <= 21 && usuarioPontuacao > computadorPontuacao) || (computadorPontuacao > 21 && usuarioPontuacao <= 21)) {
  console.log("O usuário ganhou!")
} else if ((computadorPontuacao <= 21 && computadorPontuacao > usuarioPontuacao) || (usuarioPontuacao > 21 && computadorPontuacao <= 21)) {
  console.log("O computador ganhou!")
} else {
  console.log("Empate!")
}
