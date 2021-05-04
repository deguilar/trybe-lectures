import React from "react";

import Clock from "./components/Clock"
import Title from './components/Title';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="app">
        <Title title="Cronometro" />
        <Clock />

      </main>
    );
  }

}

export default App;
