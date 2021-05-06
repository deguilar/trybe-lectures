import './App.css';
import { BrowserRouter } from 'react-router-dom'
import TrybePage from './components/TrybePage';

function App() {
  return (
    <BrowserRouter>
      <TrybePage />
    </BrowserRouter>
  );
}

export default App;
