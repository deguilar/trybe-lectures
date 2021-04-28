import React from 'react'
import Imagem from './Imagem'
import "./Pessoa.css"

class Pessoas extends React.Component {
  render() {
    const { pessoa } = this.props

    return (
      <section className="pessoa">
        <Imagem imagem={pessoa.foto} alt={"Imagem pessoa"} />
        <h1>{pessoa.nome}</h1>
        <p>{pessoa.idade}</p>
        <p>{pessoa.descricao}</p>
        <button>Enviar email</button>
      </section>
    )
  }

}

export default Pessoas
