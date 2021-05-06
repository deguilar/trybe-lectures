import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
