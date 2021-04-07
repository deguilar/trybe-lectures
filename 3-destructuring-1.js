const assert = require('assert');

const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
};

const expectedValue = 'Rodrigo Hilbert de Orleans, Santa Catarina';
assert.strictEqual(`${bestGuyInTheWorld.name} de ${bestGuyInTheWorld.birthplace}`, expectedValue);