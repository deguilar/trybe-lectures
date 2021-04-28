import React from 'react'
import PropTypes from 'prop-types';
import Imagem from './Imagem'
import "./Pessoa.css"

class Pessoa extends React.Component {
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

Pessoa.propTypes = {
  pessoa: PropTypes.shape({
    nome: PropTypes.string,
    idade: PropTypes.number,
    descricao: PropTypes.string,
    foto: PropTypes.string,
  })
};

export default Pessoa
