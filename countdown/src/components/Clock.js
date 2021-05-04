import React, { Component } from 'react'
import "./Clock.css"

export default class Clock extends Component {

  constructor() {
    super()

    this.state = {
      date: new Date()
    }
    this.timer = null;
  }

  componentDidMount() {
    console.log("componente montado: componentWillUnmount")
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    console.log("desmontando componente: componentWillUnmount")
    clearInterval(this.timer)
  }

  render() {
    return (
      <section className="clock" >
        {this.state.date.toLocaleTimeString()}
      </section>
    )
  }
}
