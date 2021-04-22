// Mocks sao formas de contornar resultados aleatorios retornados pela nossa funcao
// exemplo: uma funcao que retorna a data de hoje

// Mock === simular
// a palavra mock vem do ingles, porem ela foi aportuguesada é no mundo do jest é mais utilizado este termo do que o termo simulacao.

// Objetivo dessa aula é mostrar as solucoes para testarmos nossas funcoes, quando estas funcoes dependem de valores aleatorios

// Principais formas de mockar no jest
// jest.fn(), jest.mock, jest.spyOn

// Metodo para voltar a funcao mockada a seu estado original
// mock.mockRestore()

/////////////// 

//jest.fn()
// a forma de criar uma funcao em um mock(simulacao)

function randomDice(sides) {
  const rng = Math.random();
  return Math.round(rng * sides);
}

test('testando se a função foi chamada', () => {
  randomDice();
  expect(randomDice).toHaveBeenCalled();
});

test('teste da chamada da funcao', () => {
  randomDice = jest.fn().mockReturnValue(10);

  expect(randomDice()).toBe(10);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(1);
});

test('teste da chamada da funcao', () => {
  randomDice = jest
    .fn()
    .mockReturnValueOnce(8)
    .mockReturnValueOnce(6)
    .mockReturnValue(10);

  expect(randomDice()).toBe(8);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(1);

  expect(randomDice()).toBe(6);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(2);

  expect(randomDice()).toBe(10);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(3);
});

//////////////

//////////////

// jest.mock
// da a possibilidade de mockar todo um modulo (pacote) de uma vez

// libStats.js
const healthPoints = a => a * 12;
const strength = a => a * 3;
const dexterity = a => a * 2;
const intellect = a => a * 1.5;
const vitality = a => a * 2.5;

module.exports = { healthPoints, strength, dexterity, intellect, vitality };

const libStats = require('./libStats');

jest.mock('./libStats');

test('testando a chamada da funcao, quantas vezes foi chamada, os parametros e o retorno', () => {
  libStats.healthPoints.mockImplementation((a) => a * 8);
  libStats.healthPoints(5);

  expect(libStats.healthPoints).toHaveBeenCalled();
  expect(libStats.healthPoints).toHaveBeenCalledTimes(1);
  expect(libStats.healthPoints).toHaveBeenCalledWith(5);
  expect(libStats.healthPoints(5)).toBe(40);
});

//////////////

//////////////

// jest.spyOn
// Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.

const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

//////////////

//////////////

// Metodos auxiliares para facilitar o mock
// mock.mockClear()
// limpa dos dados de um mock, para nao influenciar entre os expect

// mock.mockReset()
// Faz o mesmo que o mockClear
// remove qualquer retorno estipulado ou implementado
// util para voltar um mock ao estado inicial

// mock.mockRestore()
// faz o mesmo que o mockReset
// restaura a implementacao original
// Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});

//////////////

//////////////

// Mock e funções assíncronas

function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { fetchURL };

// O retorno dessa requisição será um array com de 200 posições no seguinte formato:
[
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  },
  // ...
];

// No próximo exemplo vamos mockar a requisição e fazer dois testes: implementar um valor para quando a promise for resolvida e para quando ela for rejeitada.

const api = require("./api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(() => {
    apiURL.mockReset()
  });

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});

// Caso queira simular os efeitos colaterais da API, você pode definir o retorno como um objeto JSON. No exemplo abaixo, ao invés de carregar um array de 200 objetos, vamos definir o retorno com apenas 1.

const api = require("./api");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

test("testando requisição caso a promise resolva", async () => {
  apiURL = jest.fn().mockResolvedValue(requestReturn);

  // Mesma aplicação dos testes do exemplo anterior...
});

//////////////

//////////////

// Bonus
// Posso fazer um mock de Math para agora sim testar a funcao corretamente

function randomDice(sides) {
  const rng = Math.random();
  return Math.round(rng * sides);
}

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})

test('teste da chamada da funcao', () => {
  expect(randomDice(10)).toBe(5);
  expect(Math.random).toHaveBeenCalled();
  expect(Math.random).toHaveBeenCalledTimes(1);
});