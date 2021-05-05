import React from "react";

import Clock from "./components/Clock"
import Buttons from "./components/Buttons";
import Title from './components/Title';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <main className="app">
        <Title title="Relógio digital" />

        <div className="clock-container">
          <Clock />
        </div>

        <Buttons onStart={console.log} onClose={console.log} />
      </main>
    );
  }

}

export default App;
