import React from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductsList from './components/ProductsList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Loja Junina</h1>
        <ProductsList />
        <Cart />
      </div>
    );
  }
}

export default App;
