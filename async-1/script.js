// const sleep = (sleepDuration) => {
//   const now = new Date().getTime();
//   while(new Date().getTime() < now + sleepDuration);
// };

const funcao1 = (callback) => {
  setTimeout(() => {
    console.log('1 - coletando os dados do cliente');
    callback();
  }, Math.random() * 5000);
}

const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - enviando o email')
    console.log('envio de email finalizado');
  }, Math.random() * 5000);
};

console.log('iniciando envio de email');

funcao1(funcao2);


