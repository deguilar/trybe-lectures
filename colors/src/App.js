import React from 'react'
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
        <section className="container-colors">
          <input
            type="text"
            placeholder="Digite o nome de uma cor"
            onChange={this.manipulaTextoFiltro}
          />

          <ul className="colors">
            {coresFiltradas.map(cor => {
              return (
                <li key={cor.value} style={{ color: cor.color }} >
                  {cor.color}
                </li>
              )}
            )}
          </ul>
        </section>

      </main>
    );
  }

}

export default App;
