// Array vazio que terá os números sorteados
let megaSenaNumbers = [];

// Vamos gerar os números da mega de forma aleatória

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

// Aqui acontece uma reatribuição do megaSenaNumbers
// megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

// Aqui acontece uma incrementação de valores no meu array
megaSenaNumbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);

let firstPlay = [33, 24, 12, 19, 15, 51];

// Como conferir o jogo da mega sena?

let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index = index + 1) {
  let currentDrawnMegaSenaNumber = megaSenaNumbers[index];

  for (let firstPlayIndex = 0; firstPlayIndex < firstPlay.length; firstPlayIndex += 1) {
    let currentPlayedNumber = firstPlay[firstPlayIndex];

    if (currentDrawnMegaSenaNumber === currentPlayedNumber) {
      numberOfHits += 1;
    }
  }

}

console.log('Os números sorteados da mega-sena são:');
console.log(megaSenaNumbers);
console.log('Os números do meu jogo são:');
console.log(firstPlay);
console.log('A quantidade de acertos é:');
console.log(numberOfHits);
