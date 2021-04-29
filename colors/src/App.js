import React from 'react'
import Eventos from './components/Eventos'
import TituloDaPagina from './components/TituloDaPagina'
import "./App.css"

import cores from "./data"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      filtro: ""
    }

    this.manipulaTextoFiltro = this.manipulaTextoFiltro.bind(this)
  }

  manipulaTextoFiltro(evento) {
    this.setState({ filtro: evento.target.value })
  }

  render() {

    const coresFiltradas = cores.filter(cor => cor.color.includes(this.state.filtro))

    return (
      <main>
        <TituloDaPagina />
        <Eventos />

        <section className="container-colors">
          <input type="text" onChange={this.manipulaTextoFiltro} />
          <ul className="colors">
            {coresFiltradas.map(cor => <li key={cor.value} style={{ color: cor.color }} >{cor.color}</li>)}
          </ul>
        </section>

      </main>
    );
  }

}

export default App;
