const assert = require('assert');
// Existe uma matriz com alguns números. Todos os números são iguais, exceto um. Tente encontrar!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// É garantido que a matriz contém pelo menos 3 números

// Os testes contêm alguns arrays muito grandes, então pense no desempenho.

function findUniq(arr) {

}

assert.deepStrictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
assert.deepStrictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
assert.deepStrictEqual(findUniq([ 0, 0, 0, 0, 0, 0, 0, 0, 1 ]), 1);