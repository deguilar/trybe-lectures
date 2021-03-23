let x = 3;

function class8(bool) {
  if(bool) {
    let x = 48;
  }

  return x;
}


console.log(class8(true)); 
console.log(class8(false));


function nomeFuncao () {
  //código 
}

botao.addEventListener('click', function () {
  //codigo
});

() => {
  //código 
}

botao.addEventListener('click', () => {
  //código 
});

const myFunction = () => {
  //código 
}

myFunction();


const soma = (num1, num2) => num1 + num2;

console.log(soma(2,8));

const hello = () => console.log('hello');

console.log(hello());


const calcArea = (base, height) => (base * height) / 2;

console.log(calcArea(10,5));




const splitSentence = (word) => word.split(' ');

console.log(splitSentence('Hey Ho!'));



const highestCount = (array) => {
  let hight = array[0];
  let rept = 1;
  for (let i=1; i<array.length; i += 1){
      if (array[i]>hight){
          hight = array[i];
          rept = 1;
      } else if (array[i]==hight){
           rept += 1;
      }
  }
  return rept;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));



const message = `Essa é minha
primeira mensagem`;

console.log(message);




const to = 'Turma 10-A';
const value = 'R$ 17,90';

const email =
`Olá ${to},
o valor da sua cobrança é ${value}.
Esta é uma mensagem automática.`;

console.log(email);