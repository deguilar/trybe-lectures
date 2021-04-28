import React from 'react'
import './Questao.css'

class Questao extends React.Component {
  render() {
    const { titulo, descricao, alternativas } = this.props.questao;

    return (
      <section className="questao">
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <ul>
          {alternativas.map((alternativa) => {
            return <li key={alternativa}>{alternativa}</li>
          })}
        </ul>
      </section>
    )
  }
}

export default Questao 