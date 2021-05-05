import React from "react";

import Clock from "./components/Clock"
import Buttons from "./components/Buttons";
import Title from './components/Title';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      showDate: true
    }
  }

  handleStart = (event) => {
    this.setState({ showDate: true })
  }

  handleClose = (event) => {
    this.setState({ showDate: false })
  }

  handleShow = () => {
    if(this.state.showDate) {
      return <Clock />
    }

    return (
      <section>
        <p>Bem vindo turma</p>
      </section>
    )
  }

  render() {

    const element = this.handleShow()

    return (
      <main className="app">
        <Title title="Relógio digital" />

        <div className="clock-container">
          {element}
          {/* {this.state.showDate ? <Clock /> : ""} */}
        </div>

        <Buttons onStart={this.handleStart} onClose={this.handleClose} />
      </main>
    );
  }

}

export default App;
