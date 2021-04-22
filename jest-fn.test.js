let { randomDice } = require('./random-dice')

test("testando se a função foi chamada", () => {
  // testando se a função foi chamada
  expect(randomDice).toBeDefined();
 // expect(randomDice(10)).toBe(3);
});



// test("testando se a função foi chamada", () => {
//   // testando se a função foi chamada
//  expect(randomDice(10)).toBe(3);
// });


// test('testando a funcao randomDice', () => {
//   randomDice = jest.fn().mockReturnValue(10);

//   expect(randomDice()).toBe(10);
//   expect(randomDice).toHaveBeenCalled();
//   expect(randomDice).toHaveBeenCalledTimes(1);
// });


// test('teste da chamada da funcao', () => {
//   randomDice = jest
//     .fn()
//     .mockReturnValueOnce(8)
//     .mockReturnValueOnce(6)
//     .mockReturnValue(10);

//   expect(randomDice()).toBe(8);
//   expect(randomDice).toHaveBeenCalled();
//   expect(randomDice).toHaveBeenCalledTimes(1);

//   expect(randomDice()).toBe(6);
//   expect(randomDice).toHaveBeenCalled();
//   expect(randomDice).toHaveBeenCalledTimes(2);

//   expect(randomDice()).toBe(10);
//   expect(randomDice).toHaveBeenCalled();
//   expect(randomDice).toHaveBeenCalledTimes(3);
// });





