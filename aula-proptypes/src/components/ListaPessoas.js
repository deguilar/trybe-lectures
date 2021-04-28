import React from 'react'
import PropTypes from 'prop-types';
import Pessoa from './Pessoa'
import './ListaPessoas.css'

class Pessoas extends React.Component {
  render() {
    const { pessoas } = this.props

    return (
      <section className="lista-pessoas">
        {pessoas.map((pessoa) => <Pessoa key={pessoa.nome} pessoa={pessoa} />)}
      </section>
    )
  }
}

Pessoas.propTypes = {
  pessoas: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      idade: PropTypes.number,
      descricao: PropTypes.string,
      foto: PropTypes.string,
    })
  )
};

export default Pessoas
