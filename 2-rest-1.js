const assert = require('assert');

// PARAMETRO REST: Permite que a passagem de parâmetro seja feita em um único parâmetro.

// Com array
const sumAll = (values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });

  return sum;
};

//TESTES
assert.strictEqual(sumAll([1, 2]), 3); // 1 parâmetro: array
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);