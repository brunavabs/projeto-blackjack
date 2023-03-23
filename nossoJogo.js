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
    console.log("Boas vindas ao jogo de BlackJack!");

    if (confirm("Quer iniciar uma nova rodada?")) {
    
      let usuarioCartas = [];
      let usuarioPontuacao = 0;
      let computadorCartas = [];
      let computadorPontuacao = 0;
    
      for (let i = 0; i < 2; i++) {
        usuarioCartas.push(comprarCarta());
        computadorCartas.push(comprarCarta());
      }
    
      for (let carta of usuarioCartas) {
        usuarioPontuacao += carta.valor;
      }
    
      for (let carta of computadorCartas) {
        computadorPontuacao += carta.valor;
      }
    
      console.log(`Usuário - cartas: ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} - pontuação ${usuarioPontuacao}`);
      console.log(`Computador - cartas: ${computadorCartas[0].texto} ${computadorCartas[1].texto} - pontuação ${computadorPontuacao}`);
    
      if (usuarioPontuacao > computadorPontuacao && usuarioPontuacao <= 21) {
        console.log("O usuário ganhou!");
      } else if (computadorPontuacao > usuarioPontuacao && computadorPontuacao <= 21) {
        console.log("O computador ganhou!");
      } else if (usuarioPontuacao === computadorPontuacao && usuarioPontuacao <= 21) {
        console.log("Empate!");
      } else if (usuarioPontuacao <= 21 && computadorPontuacao > 21) {
        console.log("O usuário ganhou!");
      } else if (computadorPontuacao <= 21 && usuarioPontuacao > 21) {
        console.log("O computador ganhou!");
      } else {
        console.log("Nenhum jogador venceu!");
      }
    
    } else {
      console.log("O jogo acabou.");
    }
    