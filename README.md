# Introdução - Front-end

- Video do alberto no Course da uma visao geral sobre o porque usamos React e o que as pessoas
  estudantes ja aprenderam no modulo
- Video sobre npm

# Voce sera capaz de

- Saber a melhor forma para instalar um gerenciador de pacotes.
- Inicializar um projeto em React
- Utilizar JSX no React
- Utilizar o ReactDOM.render para renderizar elementos numa página web.
- Utilizar o import para usar código externo junto ao seu.

# Ecossistema React

- React
- JSX
- ES6
- Webpack
- Flux/Redux
- axios/fetch
- Jest/Mocha

# Quiz

- O que é npm?
- Qual a funcao da pasta node_modules?
- Qual comando é responsável por instalar as dependências do projeto e criar a pasta node_modules?
- Quais as principais vantagens de colocar a pasta node_modules no .gitignore?
- Qual comando é utilizado para criar um novo projeto React?
- Qual a principal vantagem de construir sua aplicação com React?
  (Poder dividir a aplicação em pequenos blocos, reutilizáveis ou não.)
- Qual dos blocos de código a seguir utiliza corretamente a sintaxe JSX para inserir uma lista à aplicação?
- Em React a palavra reservada class consiste em:
- Qual das alternativas a seguir traz a correta função do ReactDOM.render
- Qual bloco de código a seguir representa a criação correta de um componente de classe em React?

# Exercicio

- Criar um componente
- Adicionar o componente no App.js
- Renderize uma lista com o map

# Ideias

- Como adicionar um elemento usando JS puro
  - seleciono o elemento no DOM (querySelector)
  - crio um elemento com JS (createElement)
  - adiciono o elemento criado ao elemento selecionado do DOM (appendChild)
- Como adiciono um elemento usando React e JSX

  - crio um componente
  - import e renderizo o componente dentro do App.js
  - adiciono o App.js ao ReactDOM.render

- Como importar e exportar usando require

  - module.exports = myFunction
  - const myVariable = require('./caminho-do-arquivo')

- Como importar e exportar usando import
  - export default myFunction
  - import myVariable from "./caminho-do-arquivo"

# Aula

Ideia geral é apresentar o React e a forma como se cria componentes a partir de funcoes e de classes

- iniciar um projeto com o create-react-app
- mostrar o app rodando
- explicar JSX e como usar JS dentro dele
- explicar o ReactDOM.render
- renderizar o componente
  - criar mais tags dentro da App.js
  - transforma essas tags numa funcao que export elas
  - chamar dentro do App
  - criar um arquivo para este novo componente
- explicar o import e export
- criar um componente usando class
- renderizar componente componente dentro do outro
