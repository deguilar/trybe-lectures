const assert = require('assert');

// Ao receber a string abaixo em uma função.
// Retorne um objeto que diga a quantidade de cada uma das letras.
// Não é permitido nesse desafio utilizar os métodos split e join.
// O objeto deve estar ordenado pelas chaves em ordem alfabética.
// Sua resposta deve ser case-insensitive.

const phrase = "While Bulbasaur might not be the most beautiful Pokemon, it's the greatest Pokemon for beginning players. Why? It has immunity against poison status, it is solid in the gyms, and its attacks are consistent. Bulbasaur is great to help ease new players into the game, meanwhile Bulbasaur evolves more quickly and it is one of the easiest Pokemon to care for. Also in RBY Razor Leaf crits each time that a Venusaur uses it.";

const countChars = string => {};

const result = {
  a: 32,
  b: 10,
  c: 6,
  d: 3,
  e: 38,
  f: 5,
  g: 8,
  h: 13,
  i: 28,
  k: 5,
  l: 14,
  m: 12,
  n: 21,
  o: 23,
  p: 7,
  q: 1,
  r: 17,
  s: 31,
  t: 34,
  u: 14,
  v: 3,
  w: 4,
  y: 7,
  z: 1
};

assert.deepStrictEqual(countChars(phrase), result);
assert.deepStrictEqual(countChars(phrase)[Object.keys(countChars(phrase))[0]], 32);
