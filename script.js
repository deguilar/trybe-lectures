// const person = {
//   name: 'Carol',
//   lastName: 'Santos',
//   greet: (greetFunction) => {
//     return greetFunction();
//   }
// }

// // person.greet = (greetFunction) => {
// //   return greetFunction();
// // }

// const formalGreenting = () => {
//   console.log('Está tudo na maior maravilha!');
// }

// const badMoodGreeting = () => {
//   console.log('Não fale comigo...');
// }

// person.greet(badMoodGreeting);



// // const greetingPeople = (person) => {
// //   console.log(`Olá ${person.name}, como vai você?`);
// // }

// // greetingPeople(person);

// const discount = (price, discount) => {
//   return price * discount;
// }

// const price = 500;

// const onlyDiscount = discount(price, 0.10);

// console.log(onlyDiscount);

// const finalPrice = price - onlyDiscount;

// console.log(finalPrice);
const price = 500;

const discount = (discount) => {
  return (myPrice) => {
    return myPrice * discount;
  }
}


//const tenPercentDiscount = discount(0.10);

//const finalPrice = price - tenPercentDiscount(price);
const finalPrice = price - discount(0.10)(price);

console.log(finalPrice);