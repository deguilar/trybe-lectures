import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom'

function App() {

  const nomes = ['Trybe', 'Turma', 'React']

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Content nomes={nomes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
