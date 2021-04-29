import React from "react"
import './App.css';
import cores from "./cores"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '',
      corFiltrada: ''
    }

    this.mudarLista = this.mudarLista.bind(this)
    this.filtraTudo = this.filtraTudo.bind(this)
  }

  mudarLista(event) {
    this.setState({
      color: event.target.value,
      corFiltrada: this.state.corFiltrada
    })
  }

  filtraTudo() {
    this.setState({
      color: this.state.color,
      corFiltrada: this.state.color
    })
  }

  render() {

    console.log(this.state.color)

    const inputColor = cores.filter(cor => cor.color.includes(this.state.corFiltrada))

    return (
      <div className="App">
        <input onChange={this.mudarLista} />

        <button onClick={this.filtraTudo}>Filtrar</button>

        <ul>
          {inputColor.map((cor) => <li style={{ color: cor.value }} >{cor.color}</li>)}
        </ul>

        <h1>{this.state.color}</h1>

      </div>
    );
  }
}

export default App;
