# 'Hello, world!' no React!

## Iniciar um projeto

`npx create-react-app nome-do-seu-projeto`

Após a criacao se não houver nenhum erro no terminal, digite no terminal

`cd nome-do-seu-projeto`
`npm start`

A partir daqui, se não houver erro no terminal, seu navegador ira mostrar um projeto React rodando

## Arquivos principais

`package.json` -> arquivo que nos diz os `scripts` que existem, as bibliotecas que foram adicionadas e etc
`src/index.js` -> arquivo onde se inicia a aplicacao React
`src/App.js` -> arquivo onde iremos criar os nossos componentes

## JSX

É parecido com o `HTML`, utilizamos eles dentro de funcoes Javascript para criarmos nossos componentes.

## Criando componente

2 formas de criar componentes no React, com `function` ou com `class`

```js
function App() {
  return (
    <h1>Hello World</h1>
  )
}
```

A diferenca de `class` é que precisamos utilizar essa sintaxe do `extends React.Component` e retornar nosso JSX dentro do metodo `render`
```js
class App extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}
```

## Criando e utilizando componentes

Podemos criar um componente fora da funcao `App` no arquivo `App.js` como uma funcao. e Para utilizarmos esse componente utilizamos escrevemos ele como se fosse uma tag HTML
`obs: Nome do componente deve ser em letra maiscula, para que o React nao confunda ele com uma tag HTML pura (exemplo: <div>)`

```js
function MeuComponente() {
  return (<h1>Hello World</h1>)
}

function App() {
  return (<MeuComponente />)
}
```

Podemos combinar as nossas tags HTML com os nossos componentes;

```js
function App() {
  return (
    <section>
      <h1>Aplicacao React</h1>
      <MeuComponente />
      <p>Projeto feito para a turma da Trybe</p>
    </section>
  )
}
```

## import/export - Nova forma de importar e exportar componentes no JavaScript

Podemos criar nossos componentes dentro de arquivos separados, porem para importarmos e exportarmos eles precisamos utilizar o `import` e `export default`

```js
//Arquivo MeuComponente.js
import React from React;

function MeuComponente() {
  return (<h1>Hello World</h1>)
}
export default MeuComponente
```

E para utilizarmos o nosso componente dentro da `App.js`, importamos ele pegando o caminho do arquivo dentro do projeto
```js
//Arquivo App.js
import MeuComponente from './MeuComponente';

function App() {
  return (<MeuComponente />)
}
```

## ReactDOM.render

Essa funcao `render` da biblioteca `ReactDOM` é responsável por adicionar todos os nossos componentes dentro do arquivo html final do projeto

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Essa funcao importa o `App.js` que possui todos os componentes, seleciona a tag do HTML do projeto React e adiciona os componentes na tela

`obs: Esse arquivo HTML fica dentro da pasta public/index.html`