const assert = require('assert');

// Dado um array de valores, transforme os em um objeto igual ao objeto result abaixo.
// Ou seja, crie chaves dos tamanhos dentro da chave de cada cor.
// Nos valores destas chaves, coloque o número de vezes que aquela cor e tamanho se repetem.

const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
];

const convert = (dataArr) => {};

const result = {
  preto: { PP: 1, M: 1, G: 1, GG: 2 },
  branco: { PP: 1, G: 1 },
  vermelho: { M: 1 },
  azul: { XG: 3, P: 1 },
}

assert.deepStrictEqual(convert(wrongDataFormat), result);
