import Pessoas from './components/ListaPessoas'
import Titulo from './components/Titulo'
import ContadorFuncionarios from './components/ContadorFuncionarios'

function App() {  
  const pessoas = [
    {
      nome: 'Pessoa 1',
      idade: 20,
      descricao: 'Desenvolvedor',
      foto: 'https://www.nicepng.com/png/detail/282-2826563_computer-clipart-thumbs-up-person-on-computer-png.png'
    },
    {
      nome: 'Pessoa 2',
      idade: 33,
      descricao: 'Gerente',
      foto: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
    },
    {
      nome: 'Pessoa 3',
      idade: 45,
      descricao: 'CEO',
      foto: 'https://static.vecteezy.com/system/resources/previews/001/196/558/original/person-png.png'
    }
  ]

  return (
    <div>
      <Titulo titulo="Funcionários" />
      <ContadorFuncionarios numero={pessoas.length} />
      <Pessoas pessoas={pessoas} />
    </div>
  );
}

export default App;
