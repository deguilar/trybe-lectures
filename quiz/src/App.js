import Titulo from "./components/Titulo"
import Questao from "./components/Questao"
import './App.css';

function App() {
  const questao1 = {
    titulo: "O que é React",
    descricao: "selecione apenas uma alternativa",
    alternativas: [
      "um framework javascript",
      "um atomo",
      "um youtuber",
      "nada e tudo ao mesmo tempo"
    ]
  }

  return (
    <main className="app">
      <Titulo titulo={"Quiz em React"} />
      <Questao questao={questao1} />
    </main>
  );
}

export default App;
