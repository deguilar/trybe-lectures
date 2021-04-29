import React from 'react'

class State extends React.Component {

  constructor(props) {
    super(props)

    this.mostrarTextDigitado = this.mostrarTextDigitado.bind(this)

    this.state = {
      texto: ''
    }
  }

  mostrarTextDigitado(evento) {
    console.log(evento.target.value)
    this.setState({ texto: evento.target.value })
  }

  render() {
    return (
      <section className="search">
        <input type="text" onChange={(evento) => this.mostrarTextDigitado(evento)} />
        <p>Text digitado: {this.state.texto}</p>
      </section>
    );
  }
}

export default State;
