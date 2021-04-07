const assert = require('assert');

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


const sumAllOperands = (...numbers) => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

assert.strictEqual(sumAllOperands(1, 2), 3); 
assert.strictEqual(sumAllOperands(1, 2, 3), 6);
assert.strictEqual(sumAllOperands(1, 2, 3, 4, 5), 15);