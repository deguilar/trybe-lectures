import React from "react";

import Clock from "./components/Clock"
import Buttons from "./components/Buttons";
import Title from './components/Title';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      showCronometro: false
    }
  }

  handleStart = () => {
    this.setState({ showCronometro: true })
  }

  handleClose = () => {
    this.setState({ showCronometro: false })
  }

  render() {

    const { handleClose, handleStart, state } = this;
    const { showCronometro } = state

    return (
      <main className="app">
        <Title title="Relógio digital" />

        <div className="clock-container">
          {showCronometro && <Clock />}
        </div>

        <Buttons
          handleStart={handleStart}
          handleClose={handleClose}
        />
      </main>
    );
  }

}

export default App;
