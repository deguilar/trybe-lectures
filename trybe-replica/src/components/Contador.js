import React, { Component } from 'react'
import "./Contador.css"

export default class Contador extends Component {

  constructor() {
    super()

    this.state = {
      counter: 1,
      text: 'Tryber'
    }
    this.meuNome = "Jensen"
    this.timer = null;
  }

  componentDidMount() { //nasci
    // this.setState({ counter: 2 })
    // this.setState({ counter: this.state.counter + 1 })
    this.meuNome = "Trybe"
    this.timer = setInterval(() => this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    }), 1000)
  }

  componentWillUnmount() { //morri
    console.log(this.meuNome)
    clearInterval(this.timer)
  }

  render() { //vida
    return (
      <section className="counter">
        {this.state.counter}
      </section>
    )
  }
}
