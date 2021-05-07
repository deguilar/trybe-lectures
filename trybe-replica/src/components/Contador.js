import React, { Component } from 'react'
import "./Contador.css"

export default class Contador extends Component {

  constructor() {
    super()

    this.state = {
      counter: 1
    }


  }

  render() {
    return (
      <section className="counter">
        {this.state.counter}
      </section>
    )
  }
}
