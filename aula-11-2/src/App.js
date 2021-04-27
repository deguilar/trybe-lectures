import Mensagem from './components/Mensagem'
import Pessoa from './components/Pessoa'
import Usuario from './components/Usuario'

function App() {
  const pessoaVariavel = {
    nome: "Tio Ben 2",
    idade: 64,
    frase: 'Hello mundo'
  }

  const pessoaVariavel2 = {
    nome: "Pessoa 2",
    idade: 20,
    frase: 'Bom dia'
  }

  const pessoaVariavel3 = {
    nome: "Pessoa 3",
    idade: 30,
    frase: 'Lets'
  }

  const pessoas = [
    pessoaVariavel,
    pessoaVariavel2,
    pessoaVariavel3,
    {
      nome: 'React',
      idade: 8,
      frase: 'Components'
    }
  ]

  return (
    <div>

      <Mensagem conteudo={"Bom dia Brasil"} />

      <Usuario foto={'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'}/>


      {pessoas.map((person, index) => {
        return (
          <Pessoa key={index} pessoa={person}/>
        )
      })}

    </div>
  )
}

export default App;
