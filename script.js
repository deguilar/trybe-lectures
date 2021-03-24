// const person = {
//   name: "Jackson",
//   lastName: "Pires"
// }

// console.log(`Olá ${person.name} ${person['lastName']}!`);

// person.age = 41;
// person['isHappy'] = true;

// console.log(person);

// const object = {};

// for (let index = 0; index < 10; index +=1) {
//   object[index] = 'XABLAU';
// }

// console.log(object);

// const person = {
//   name: "Jackson",
//   lastName: "Pires"
// }

// person.age = 41;
// person['isHappy'] = true;

// person = 18;

// console.log(person);

//console.log(`Existe sobrenome? ${Object.keys(person).includes('lastName')}`);
// console.log(`Quais são as chaves do objeto person? ${Object.keys(person)}`);
// console.log(Object.keys(person));
// console.log(Object.values(person).includes('Jackson'));
// console.log(Object.entries(person));


const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King'
}

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
  collection: 'The Lord of the Infinity'
}

Object.assign(books, bookAuthor);

console.log(books);

//const booksClone = Object.assign({}, books)
//const booksClone = books; 

// console.log(books);
// console.log(booksClone);