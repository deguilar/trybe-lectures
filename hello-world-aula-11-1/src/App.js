import Titulo from './Titulo'
import Mensagem from './Mensagem'
import Button from './Button'

function App() {

  const name = "Jensen"

  return (
    <div>

      <Titulo />


      <h2>{'Turma 10 - A'}</h2>
      <h3>{2+2}</h3>

      <Mensagem />

      <Button />

      <div>
        <h4>{"Meu titulo"}</h4>
      </div>
      <h5>{name}</h5>
    </div>
  );
}

export default App;
