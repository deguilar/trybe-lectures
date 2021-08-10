const assert = require('assert');

// Dada uma string com uma frase, retorne uma nova frase invertendo todas as palavras que tenham cinco ou mais letras.
// Não altere a string original.

const firstPhrase = 'Trybe';
const secondPhrase = 'Olá queridos amigos';
const thirdPhrase = 'Isso é um gato';
const fourthPhrase = 'Você está quase no último teste';
const fifthPhrase = 'A base do teto desaba';

const spinWords = (string) => {};

assert.strictEqual(spinWords(firstPhrase), 'ebyrT');
assert.strictEqual(firstPhrase, 'Trybe');
assert.strictEqual(spinWords(secondPhrase), 'Olá sodireuq sogima');
assert.strictEqual(secondPhrase, 'Olá queridos amigos');
assert.strictEqual(spinWords(thirdPhrase), 'Isso é um gato');
assert.strictEqual(thirdPhrase, 'Isso é um gato');
assert.strictEqual(spinWords(fourthPhrase), 'Você está esauq no omitlú etset');
assert.strictEqual(fourthPhrase, 'Você está quase no último teste');
assert.strictEqual(spinWords(fifthPhrase), 'A base do teto abased');
assert.strictEqual(fifthPhrase, 'A base do teto desaba');
