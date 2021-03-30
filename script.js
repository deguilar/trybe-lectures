// const pizzas = [
//   { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
//   { sabor: 'Marguerita', pedidos: 75, status: '' },
//   { sabor: 'Gratinada', pedidos: 68, status: '' },
//   { sabor: 'Quatro Queijos', pedidos: 80, status: '' }
// ];

// const verficaPizza = (pizza) => {
//   if(pizza.pedidos >= 75) {
//     pizza.status = 'TOP';
//   } else {
//     pizza.status = 'Não é TOP';
//   }
// }

// pizzas.forEach((pizza) => {
//   if(pizza.pedidos >= 75) {
//     pizza.status = 'TOP';
//   } else {
//     pizza.status = 'Não é TOP';
//   }
// });

// console.log(pizzas);


// console.log(verficaPizzas(pizzas));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiply = (numbers) => {
//   const arr = [];

  // for (let index = 0; index < numbers.length; index += 1 ) {
  //   arr.push(numbers[index] * 3);
  // }

//   numbers.forEach(number => {
//     arr.push(number * 3);
//   });

//   return arr;
// };

// console.log(multiply(numbers));

// const pizzas = [
//   { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
//   { sabor: 'Marguerita', pedidos: 75, status: '' },
//   { sabor: 'Gratinada', pedidos: 68, status: '' },
//   { sabor: 'Quatro Queijos', pedidos: 80, status: '' }
// ];

// // Find == Procurar

// const pedidosEntre60E80 = pizzas.find((pizza) => {
//   return pizza.pedidos >= 60 && pizza.pedidos <= 80
// });

// console.log(pedidosEntre60E80);


// EVERY == Todos

// const todosOsPedidosSaoAbaixoDe100 = pizzas.every((pizza) => {
//   return pizza.pedidos < 100;
// });

// console.log(todosOsPedidosSaoAbaixoDe100);

// SOME == Algum

// const temSaborQuatroQueijos = pizzas.some((pizza) => {
//   return pizza.sabor === 'Quatro Queijos';
// });

// console.log(temSaborQuatroQueijos);

// const temPedidosAbaixoDe50 = pizzas.some((pizza) => {
//   return pizza.pedidos < 50;
// });

// console.log(temPedidosAbaixoDe50);

// const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', 'Quatro Queijos'];

// console.log(pizzas.sort());

const numbers = [8, 5, 9, 3, 1, 7, 4, 2, 6, 10];

const comparar = (a, b) => {
  return b - a;
};

numbers.sort(comparar)
console.log(numbers);

(a > b) ? x = 1 : x = 2;