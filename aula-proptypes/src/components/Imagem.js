import React from 'react'
import './Imagem.css'

export default class Imagem extends React.Component {
  render() {
    const { imagem, alt } = this.props

    return (
      <img className="img" src={imagem} alt={alt} />
    )
  }
}
