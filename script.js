const person = {
  name: 'Carol',
  lastName: 'Santos',
  greet: (greetFunction) => {
    return greetFunction();
  }
}

// person.greet = (greetFunction) => {
//   return greetFunction();
// }

const formalGreenting = () => {
  console.log('Está tudo na maior maravilha!');
}

const badMoodGreeting = () => {
  console.log('Não fale comigo...');
}

person.greet(badMoodGreeting);



// const greetingPeople = (person) => {
//   console.log(`Olá ${person.name}, como vai você?`);
// }

// greetingPeople(person);