import React from 'react'
import "./Eventos.css"

class Eventos extends React.Component {

  constructor(props) {
    super(props)

    console.log(props)
    this.mostrarTextDigitado = this.mostrarTextDigitado.bind(this)
    this.mostrarAlerta = this.mostrarAlerta.bind(this)
  }

  mostrarTextDigitado(evento) {
    console.log(evento.target.value)
  }

  mostrarAlerta() {
    alert("Bem vindo")
  }

  render() {
    return (
      <section className="search">
        <input onChange={(evento) => this.mostrarTextDigitado(evento)} />
        <button onClick={() => this.mostrarAlerta()} >Pesquisar</button>
      </section>
    );
  }
}

export default Eventos;
