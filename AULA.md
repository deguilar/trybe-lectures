# Componentes React

## Objetivos da aula

- Criando componentes que recebem parametros (props)
- Composicao de componentes
- Criar listas de componentes (map)

`obs: Não iremos abordar PropsType, esse conteudo sera visto atraves de um video que sera enviado no slack da turma`

## Pontos

React é uma biblioteca para criar componentes, ou seja, criar uma funcao ou classe que retorna um JSX.
Todos esses componentes sao renderizados (colocados) no navegador pelo `ReactDOM.render`

## Criando componentes que recebem parametros (props)

### Criando componentes
- Podemos criar um componente com `function` ou com `class`. Para esse momento do curso eles nao possuem nenhuma diferenca.

criando com `function`
```js
function Mensagem() {
  return (
    <h1>Bom dia Brasil!</h1>
  )
}
export default Mensagem
```

criando com `class`
```js
class Mensagem() {
  render() {
    return (
      <h1>Bom dia Brasil!</h1>
    )
  }
}
export default Mensagem
```
utilizando o componente criado no arquivo `App.js`
```js
import Mensagem from './Mensagem';

function App() {
  return (
    <Mensagem />
  )
}
export default App
```

### Utilizando código Javascript dentro do JSX

- Podemos tambem utilizar código Javascript dentro do JSX, utilizando o código dentro de chaves `{ }`

```js
function Mensagem(props) {
  const conteudo = 'Bom dia Brasil!'
  return (
    <h1>{conteudo}</h1>
  )
}
```

- Tambem podemos utilizar código HTML junto com o código Javascript, assim somente o código Javascript fica dinamico.

```js
function Mensagem(props) {
  const conteudo = 'Brasil!'
  return (
    <h1>Bom dia {conteudo}</h1>
  )
}
```

### Passando props

- Porém como se trata de uma funcao ou class Javascript tambem podemos passar parametros para esses componentes, e esses parametros nos chamamos de `props` no React.

```js
function Mensagem(props) {
  console.log(props);
  const conteudo = 'Brasil!'
  return (
    <h1>Bom dia {conteudo}</h1>
  )
}
```

- `props` é um objeto que o React usa para guardar os valores que são passados para aquele componente

- E para passar um parametro (uma prop) para aquele componente nós usamos a seguinte sintaxe do JSX
- A sintaxe é parecida com a utilizacao de tags do HTML. A diferenca esta no uso do sinal de `=` e as chaves `{}`
```js
import Mensagem from './Mensagem';

function App() {
  return (
    <Mensagem conteudo={"Turma 10 A"} />
  )
}
```

- E agora nos alteramos nosso componente para ele utilizar essa prop que passamos.

```js
function Mensagem(props) {
  console.log(props);
  // const conteudo = 'Brasil!'
  return (
    <h1>Bom dia {props.conteudo}</h1>
  )
}
```

### Passando mais parametros

- A quantidade de parametros é infinita e todos eles serão armazenados dentro da propriedade `props` do componente
- `obs`: como temos muitos parametros acabamos deixando cada `prop` em uma linha
```js
import Pessoa from './Pessoa';

function App() {
  return (
    <Pessoa
      nome={"Tio Ben"}
      idade={64}
      frase={'Grandes poderes trazem grandes responsabilidades'}
      foto={'https://www.einerd.com.br/wp-content/uploads/2019/08/Tio-Ben-poss%C3%ADvel-nova-morte-capa.jpg'}
    />
  )
}
export default App
```

Utilizando todas as props passadas
```js
function Pessoa(props) {
  return (
    <section>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
      <p>Frase: {props.frase}</p>
      <div>Foto de perfil: <img src={props.foto} alt="Imagem da pessoa" /></div>
    </section>
  )
}
export default Pessoa
```

## Passando tipos complexos (objetos)

- Vimos que podemos passar `string` e `number` como parametros
- Porem podemos passar tipos complexos tambem como `object` e `arrays`

- Reescrevendo o exemplo anterior 

```js
import Pessoa from './Pessoa';

function App() {
  const pessoa = {
    nome: 'Tio Ben',
    idade: 64,
    frase: 'Grandes poderes trazem grandes responsabilidades',
    foto: 'https://www.einerd.com.br/wp-content/uploads/2019/08/Tio-Ben-poss%C3%ADvel-nova-morte-capa.jpg'
  }

  return (
    <Pessoa pessoa={pessoa} />
  )
}
export default App
```

Utilizando o objeto pessoa passado como props
```js
function Pessoa(props) {
  return (
    <section>
      <p>Nome: {props.pessoa.nome}</p>
      <p>Idade: {props.pessoa.idade}</p>
      <p>Frase: {props.pessoa.frase}</p>
      <div>Foto de perfil: <img src={props.pessoa.foto} alt="Imagem do pessoa" /></div>
    </section>
  )
}
export default Pessoa
```

## Composicao de componentes

No exemplo anterior criamos um componente `Pessoa`, porem pessoa uma foto de perfil, porem e seu eu criar um outro componente que tenha uma foto de perfil tambem?

```js
function PessoaUsuario(props) {
  return (
    <section>
      <p>Nome: {props.nome}</p>
      <div>Foto de perfil: <img src={props.foto} alt="Imagem da pessoa usuario" /></div>
    </section>
  )
}
export default PessoaUsuario
```

- Aqui temos um exemplo de codigo que pode ser reaproveitado, tanto pelo componente PessoaUsuario quanto pelo Pessoa.
- Por isso usamos composicao de componente aqui.
- Composicao permite a reutilizacao  reducao da complexidade dos codigos

- portanto vamos criar um componente `ImagemPerfil`

```js
function ImagemPerfil(props) {
  return (
    <div>Foto de perfil: <img src={props.foto} alt={props.alt} /></div>
  )
}
export default ImagemPerfil
```

- reutiliza-lo nos componentes PessoaUsuario e no Pessoa.

```js
import ImagemPerfil from './ImagemPerfil'

function PessoaUsuario(props) {
  return (
    <section>
      <p>Nome: {props.nome}</p>
      <ImagemPerfil foto={props.foto} alt={"Imagem da pessoa usuario"} />
    </section>
  )
}
export default PessoaUsuario
```

```js
import ImagemPerfil from './ImagemPerfil'

function Pessoa(props) {
  return (
    <section>
      <p>Nome: {props.pessoa.nome}</p>
      <p>Idade: {props.pessoa.idade}</p>
      <p>Frase: {props.pessoa.frase}</p>
      <ImagemPerfil foto={props.pessoa.foto} alt={"Imagem do pessoa"} />
    </section>
  )
}
export default Pessoa
```

## Criar listas de componentes (map)

- Imagine que eu tenha que criar uma aplicacao que exibe os funcionarios de uma empresa
  - Para cada funcionario eu devo criar um codigo dentro da `App.js` por exemplo

```js
function App() {
  const funcionario1 = {
    nome: 'Pessoa 1',
    funcao: 'Operador',
    setor: 'Maquinas',
    foto: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
  }

  return (
    <section>
      <div>
        <h1>{funcionario1.nome}</h1>
        <img src={funcionario1.foto} alt="Imagem do funcionario" />
      </div>
    </section>
  )
}
export default App
```

  - Agora se tivermos 3 funcionario na pagina, teremos que criar 3 vezes esse codigo da imagem
```js
function App() {
  const pessoaFuncionario1 = {
    nome: 'Pessoa 1',
    funcao: 'Operacao',
    setor: 'Maquinas',
    foto: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
  }

  const pessoaFuncionario2 = {
    nome: 'Pessoa 2',
    funcao: 'Operacao',
    setor: 'Estoque',
    foto: 'https://static.vecteezy.com/system/resources/previews/001/196/558/original/person-png.png'
  }

  const pessoaFuncionario3 = {
    nome: 'Pessoa 3',
    funcao: 'Vendas',
    setor: 'Produtos',
    foto: 'https://www.seekpng.com/png/detail/17-176376_person-free-download-and-person-icon-png.png'
  }

  return (
    <section>
      <div>
        <h1>{pessoaFuncionario1.nome}</h1>
        <h2>{pessoaFuncionario1.funcao}</h2>
        <h3>{pessoaFuncionario1.setor}</h3>
        <img src={pessoaFuncionario1.foto} alt="Imagem do pessoa funcionaria" />
      </div>

      <div>
        <h1>{pessoaFuncionario2.nome}</h1>
        <h2>{pessoaFuncionario2.funcao}</h2>
        <h3>{pessoaFuncionario2.setor}</h3>
        <img src={pessoaFuncionario2.foto} alt="Imagem do pessoa funcionaria" />
      </div>

      <div>
        <h1>{pessoaFuncionario3.nome}</h1>
        <h2>{pessoaFuncionario3.funcao}</h2>
        <h3>{pessoaFuncionario3.setor}</h3>
        <img src={pessoaFuncionario3.foto} alt="Imagem do pessoa funcionaria" />
      </div>
    </section>
  )
}
```

  - Como estamos usando React, podemos criar um componente para essa pessoa e passar os valores por props

```js
import React from 'react'

function PessoaFuncionario(props) {
  return (
    <div>
      <h1>{props.pessoaFuncionario.nome}</h1>
      <h2>{props.pessoaFuncionario.funcao}</h2>
      <h3>{props.pessoaFuncionario.setor}</h3>
      <img src={props.pessoaFuncionario.foto} alt="Imagem do pessoa funcionaria" />
    </div>
  )
}

export default PessoaFuncionario
```

  - E reutiliza-la dentro da `App.js`

```js
import PessoaFuncionario from './PessoaFuncionario'

function App() {
  const pessoaFuncionario1 = {
    nome: 'Pessoa 1',
    funcao: 'Operacao',
    setor: 'Maquinas',
    foto: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
  }

  const pessoaFuncionario2 = {
    nome: 'Pessoa 2',
    funcao: 'Operacao',
    setor: 'Estoque',
    foto: 'https://static.vecteezy.com/system/resources/previews/001/196/558/original/person-png.png'
  }

  const pessoaFuncionario3 = {
    nome: 'Pessoa 3',
    funcao: 'Vendas',
    setor: 'Produtos',
    foto: 'https://www.seekpng.com/png/detail/17-176376_person-free-download-and-person-icon-png.png'
  }

  return (
    <div>
      <PessoaFuncionario pessoaFuncionario={pessoaFuncionario1} />
      <PessoaFuncionario pessoaFuncionario={pessoaFuncionario2} />
      <PessoaFuncionario pessoaFuncionario={pessoaFuncionario3} />
    </div>
  )
}
```

- Agora se tivermos 100 funcionario na pagina, teremos que chamar 100 vezes o componente PessoaFuncionario, e aqui comeca a ficar insustentavel o nosso codigo
- Dizemos nesse caso que nosso codigo não escala
- Para resolver esse problema utilizamos criamos nossos componentes com o `map`

Lembrando que o `map` é uma funcao do Array para transforma uma lista em alguma outra lista
- Ele passa por todos os elementos do Array e no final volta um novo array, sem mexer no array original

Exemplo, criando a tabuada do 2 a partir dos numeros de 1 a 10
```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tabuadaDo2 = numeros.map((numero) => numero * 2)
console.log(tabuadaDo2)
//[ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]
```

Exemplo, criando uma lista de bom dia para os usuarios
```js
const pessoas = ['Silvinha', 'Mari', 'Rapunzel', 'Gabriel', 'Le']
const bomDiaPessoal = pessoas.map((pessoa) => `Bom dia ${pessoa}`)
console.log(bomDiaPessoal)
//[ 'Bom dia Silvinha', 'Bom dia Mari', 'Bom dia Rapunzel', 'Bom dia Gabriel', 'Bom dia Le' ]
```

Agora podemos utilizar esse poder do `map`, para transforma uma lista de alguma coisa em uma lista de Componentes

```js
import PessoaFuncionario from './PessoaFuncionario'

function App() {
  const pessoas = [
    {
      nome: 'Pessoa 1',
      funcao: 'Operacao',
      setor: 'Maquinas',
      foto: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
    },
    {
      nome: 'Pessoa 2',
      funcao: 'Operacao',
      setor: 'Estoque',
      foto: 'https://static.vecteezy.com/system/resources/previews/001/196/558/original/person-png.png'
    },
    {
      nome: 'Pessoa 3',
      funcao: 'Vendas',
      setor: 'Produtos',
      foto: 'https://www.seekpng.com/png/detail/17-176376_person-free-download-and-person-icon-png.png'
    }
  ]

  return (
    <div>
      {pessoas.map((pessoa) => <PessoaFuncionario pessoaFuncionario={pessoa} />)}c
    </div>
  )
}
```