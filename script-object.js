// -> { } chave
// -> [ ] colchete
// -> ( ) parenteses

let studentName = 'Dario';
let studentLastName = 'Villefor';

let student = {
  name: 'Dário',
  lastName: 'Villefor',
  favoriteNumber: 7,
  canDrive: true,
  favoriteMovies: ['O senhor dos aneis 1', 'O senhor dos aneis 2', 'O senhor dos aneis 3: a pedra filosofal'],
  foundationProjectGrades: {
    lessonLearned: 95,
    playgroundFunction: 100
  }
};

console.log('O nome da pessoa estudante é: ' + student.name);
console.log('O sobrenome da pessoa estudante é: ' + student['lastName']);

student.age = 20;
student['nickname'] = 'Darin';

console.log('O primeiro filme favorito do ' + student.name + ' é ' + student.favoriteMovies[0]);

student.favoriteMovies.push('Harry Potter e o circulo das torres');
console.log(student.foundationProjectGrades.playgroundFunction);
