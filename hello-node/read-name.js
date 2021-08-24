const { question } = require('readline-sync');

const nome = question('Digite seu nome: ');
const sobrenome = question('Digite seu sobrenome: ');

console.log(`Olà, ${nome} ${sobrenome}`);