import React, { Component } from 'react'
import "./Clock.css"

export default class Clock extends Component {

  constructor() {
    super()

    this.state = {
      date: new Date(),
      color: 'red'
    }
    this.timer = null;
    //console.log("método constructor")
  }

  componentDidMount() {
    // so é chamado 1 vez
    //console.log("método componentDidMount")
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("método componentDidUpdate")
  }

  componentWillUnmount() {
    // so é chamado 1 vez
    console.log("método componentWillUnmount")
    clearInterval(this.timer)
  }

  render() {
    console.log("método render")

    return (
      <section className="clock" >
        {this.state.date.toLocaleTimeString()}

        <p style={{ color: this.state.color }}>
          Minha Cor
        </p>
      </section>
    )
  }
}