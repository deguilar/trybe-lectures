// Posição da Rainha
let queenRowPosition = 7;
let queenColumnPosition = 3;

// Posição da peça oponente
let opponentRowPosition = 3;
let opponentColumnPosition = 7;

// Identifica se o ataque foi bem sucedido ou não
let succesfulAttack = false;

// Se a peça do oponente tiver na mesma linha da rainha, XABLAU
if (queenRowPosition === opponentRowPosition) {
  console.log('ataque bem sucedido na mesma linha');
  succesfulAttack = true;
} else if (queenColumnPosition === opponentColumnPosition) { // Se a peça do oponente tiver na mesma coluna da rainha, XABLAU
  console.log('ataque bem sucedido na mesma coluna');
  succesfulAttack = true;
}

// Diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition - index;

  // se a posição da linha e coluna forem igual a 0, o tabuleiro terminou.
  // o loop tem que parar
  if (queenRow <= 0 || queenColumn <= 0) {
    break;
  }

  if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    succesfulAttack = true;
  }

}

// Diagonal Superior Esquerda
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition - index;

  // se a posição da linha e coluna forem igual a 0, o tabuleiro terminou.
  // o loop tem que parar
  if (queenRow <= 0 || queenColumn <= 0) {
    break;
  }

  if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    succesfulAttack = true;
  }

}

// Diagonal Superior Direita
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition + index;

  // se a posição da linha e coluna forem igual a 0, o tabuleiro terminou.
  // o loop tem que parar
  if (queenRow <= 0 || queenColumn <= 0) {
    break;
  }

  if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
    console.log('ataque bem sucedido na diagonal superior direita');
    succesfulAttack = true;
  }

}

// Diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition + index;

  // se a posição da linha e coluna forem igual a 0, o tabuleiro terminou.
  // o loop tem que parar
  if (queenRow <= 0 || queenColumn <= 0) {
    break;
  }

  if (opponentColumnPosition === queenColumn && opponentRowPosition === queenRow) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    succesfulAttack = true;
  }

}

if (succesfulAttack === false) {
  console.log('ataque mal sucedido');
}