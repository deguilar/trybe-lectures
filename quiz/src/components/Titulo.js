import React from 'react'
import "./Titulo.css"

class Titulo extends React.Component {
  render() {
    return (
      <h1 className="titulo">{this.props.titulo}</h1>
    )
  }
}

export default Titulo 