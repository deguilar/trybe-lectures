import React from 'react'
import "./App.css"
import State from "./components/State"

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
        <State />

      </main>
    );
  }

}

export default App;
