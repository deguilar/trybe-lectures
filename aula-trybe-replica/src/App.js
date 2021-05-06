import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
