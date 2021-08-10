const assert = require('assert');

// Dado um array de inteiros, retorna a soma dos valores únicos do array.

const firstArr = [1, 2, 3];
const secondArr = [8, 1, 1, 3, 1, 8];
const thirdArr = [-1, -1, 5, 2, -7];
const nullArr = [];

const uniqueSum = (arr) => {};


assert.deepStrictEqual(uniqueSum(firstArr), 6);
assert.deepStrictEqual(uniqueSum(secondArr), 12);
assert.deepStrictEqual(uniqueSum(thirdArr), -1);
assert.deepStrictEqual(uniqueSum(nullArr), null);
