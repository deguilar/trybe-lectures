import React, { Component } from 'react'
import "./Titulo.css"

class Titulo extends Component {
  render() {
    return (
      <h1 className="titulo">{this.props.titulo}</h1>
    )
  }
}

export default Titulo 