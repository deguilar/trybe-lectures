//const numbers = [1, 2, 3, 4];

// const person = {
//   'name': 'jackson',
//   'email': 'jackson@jackson',
//   'address': 'rua tal'
// }

// const keys = person.keys() // ['name', 'email', 'address'];

// Função Nomeada

// function minhaFuncao(param1, param2) {
//   console.log( param1 + param2 );
// }

// minhaFuncao(2, 3);

//---------------------------------------------------------//
// Função Anônima

// const minhaFuncao = function(param1, param2){
//   return param1 + param2;
// }

// console.log(minhaFuncao(2, 3));

//---------------------------------------------------------//
// Função Arrow / Arrow Function

// const minhaFuncao = (param1, param2) => param1 + param2;

// console.log(minhaFuncao(2, 3));

//---------------------------------------------------------//
// Conceito

// function addOne(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] + 1;
//   }

//   return array;
// }

// console.log(addOne(numbers));

//---------------------------------------------------------//
//FOR EACH

// const forEach = (array, callback) => {
//   for (let index = 0; index < array.length; index += 1) {
//     array[index] = callback(array[index])
//   }
//   return array;
// }

// console.log(
//   forEach(numbers, (number) => number + 2)
// );

//---------------------------------------------------------//
//FIND

// const find = (array, callback) => {
//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index])) {
//       return array[index];
//     }
//   }
//   return null;
// }
// console.log(
//   find(numbers, (number) => number === 4)
// );

//---------------------------------------------------------//
//FILTER

// const filter = (array, callback) => {
//   let newArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index])) {
//       newArray.push(array[index]);
//     }
//   }

//   return newArray;
// }

// console.log(
//   filter(numbers, (number) => number <= 2)
// );

//---------------------------------------------------------//
//MAP

// const map = (array, callback) => {
//   let newArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     const mappedItem = callback(array[index]);
//     newArray.push(mappedItem);
//   }

//   return newArray;
// }

// console.log(
//   map(numbers, (number) => number * 2)
// );

//---------------------------------------------------------//
//REDUCE
const numbers = [1, 2, 3, 4];

const reduce = (array, callback, initialValue) => {
  let acc, index;

  if (initialValue == undefined) {
    index = 1;
    acc = array[0];
  } else {
    index = 0;
    acc = initialValue;
  }

  for (; index < array.length; index += 1) {
    acc = callback(acc, array[index]);
  }
  return acc;
}

console.log(
  reduce(numbers, (total, number) => total + number)
);