import React from 'react'

class TituloDaPagina extends React.Component {

  constructor(props) {
    super(props)

    this.texto = "Bom dia"
    this.tribo = "Tribo A"

    this.pegarNomeDaTurma = this.pegarNomeDaTurma.bind(this);
  }

  pegarNomeDaTurma() {
    return `Turma 10 - ${this.tribo}`
  }

  render() {

    const turma = this.pegarNomeDaTurma();

    return (
      <h1>
        {this.texto} {turma}: {this.props.titulo}
      </h1>
    );
  }
}

export default TituloDaPagina;
