import React from 'react'
import "./Eventos.css"

class Eventos extends React.Component {

  constructor(props) {
    super(props)

    console.log(props)
    this.mostrarTextDigitado = this.mostrarTextDigitado.bind(this)
  }

  mostrarTextDigitado(evento) {
    console.log(evento.target.value)
  }

  render() {
    return (
      <section className="search">
        <input onChange={(evento) => this.mostrarTextDigitado(evento)} />
      </section>
    );
  }
}

export default Eventos;
