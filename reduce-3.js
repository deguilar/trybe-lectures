const assert = require('assert');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

const newPlayers = players.reduce((previousValue, currentValue) => {
  // iteracao 1 => previousValue === {}
  // iteracao 1 => currentValue === { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }
  //previousValue['nomedachave'] = 'valor';

  previousValue[currentValue.fullName] = currentValue.email;
  return previousValue;
}, {});

const expectedValues = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@futebol.br'
};

// console.log(newPlayers);
// accumulator inicial == null
// iteracao 1 => previousValue === { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }
// iteracao 1 => currentValue ===  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' }


// accumulator inicial == {}
// iteracao 1 => previousValue === {}
// iteracao 1 => currentValue === { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }

//Testes


assert.deepStrictEqual(newPlayers, expectedValues);