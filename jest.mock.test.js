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

test('testando a funcao dexterity', () => {
  libStats.dexterity.mockImplementation((a) => a * 2.4);
  libStats.dexterity(10);

  expect(libStats.dexterity).toHaveBeenCalled();
  expect(libStats.dexterity).toHaveBeenCalledTimes(1);
  expect(libStats.dexterity).toHaveBeenCalledWith(10);
  expect(libStats.dexterity(10)).toBe(24);
});