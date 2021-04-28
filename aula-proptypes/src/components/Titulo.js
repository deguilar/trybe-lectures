import React from 'react'
import "./Titulo.css"

class Titulo extends React.Component {
  render() {
    const { titulo } = this.props

    return (
      <h1 className="titulo">
        {titulo}
      </h1>
    )
  }

}

export default Titulo
