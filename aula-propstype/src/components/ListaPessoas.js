import React from 'react'
import Pessoa from './Pessoa'
import './ListaPessoas.css'

class Pessoas extends React.Component {
  render() {
    const { pessoas } = this.props

    return (
      <section className="lista-pessoas">
        {pessoas.map((pessoa) => <Pessoa pessoa={pessoa} />)}
      </section>
    )
  }

}

export default Pessoas
