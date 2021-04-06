const numbers = [2, 3, 4, 6, 8, 12, 24];

// let sumWithFor = numbers[0];
// for (let index = 1; index < numbers.length; index += 1) {
//   sumWithFor = sumWithFor + numbers[index];
// }

// console.log(`A soma dos itens do array numbers é: ${sumWithFor}`);


// const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
//   //console.log(`${accumulator} -- ${currentValue}`);
//   return accumulator + currentValue;
// });

// Informando o parâmetro de acumulador == 0
// iteracao 1 ===>> accumulator == 0, currentValue == 2
// iteracao 2 ===>> accumulator == 2, currentValue == 3
// iteracao 3 ===>> accumulator == 5, currentValue == 4

// console.log(sumWithReduce);
// const evenNumbers = numbers.filter((number) => number % 2 === 0 );

// console.log(evenNumbers);

const sumEvenNumbers = numbers
  .filter((number) => number % 2 === 0 )
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumEvenNumbers);