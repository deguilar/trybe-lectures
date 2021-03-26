// Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.

// Por exemplo:

// summationOf(1) retorna 1: de 1 até 1 = 1
// summationOf(3) retorna 6: de 1 até 3 = 1 + 2 + 3 = 6
// summationOf(5) retorna 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

const assert = require('assert');

//typeof(summationOf) === 'function'

const summationOf = (number) => {
  if(typeof(number) !== 'number'){
    throw new Error('Utilize apenas números!');
  }

  let summation = 0;

  for(let index = 1; index <= number; index += 1){
    summation += index;
  }

  return summation;
}

assert.strictEqual(typeof(summationOf), 'function', 'O resultado esperado é uma função com o nome summationOf');

assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(0), 0);

assert.throws(() => {
  summationOf('0');
})

// const sum = (num1, num2) => {
//   if (typeof(num1) === 'string' || typeof(num2) === 'string') {
//     throw Error('Valores devem ser números.');
//   }
//   return num1 + num2;
// }

// sum(3, '8');