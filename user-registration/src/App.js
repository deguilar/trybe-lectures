import React from 'react';
import Input from './components/Input';
import './App.css';


class App extends React.Component {

  constructor() {
    super()

    this.turma = "Turma 10 A - Tryber"

    //this.getTurmaName = this.getTurmaName.bind(this)

    this.state = {
      name: '',
      email: '',
      profissao: '',
      errorName: '',
      errorEmail: ''
    }
  }

  getTurmaName = () => {
    return `Bem vindo ${this.turma}`
  }

  handleName = (event) => {
    const { value } = event.target
    this.setState({ name: value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleValue = (event) => {
    console.log(event.target.name)
    const { value, name: minhaChave } = event.target


    let newErrorName = "";
    let newErrorEmail = "";
    // const minhaVar = 'email'

    if(value.length >= 10 && minhaChave === 'name') {
      newErrorName = "Nao pode digitar mais que 10"
    }

    if(minhaChave === "email" && value.length >= 5) {
      newErrorEmail = "Nao pode digitar mais que 5"
    }

    this.setState({
      [minhaChave]: value,
      errorName: newErrorName,
      errorEmail: newErrorEmail
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state)

  }
  
  render() {

    //console.log('Atualizou a tela', this.state)

    // const name = this.props.name
    const message = this.getTurmaName()

    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          <p>{message}</p>
          <form onSubmit={(event) => this.handleSubmit(event)} >

            <Input
              name={this.state.name}
              handleValue={this.handleValue}
              error={this.state.errorName}
              nameIdentify="name"
            />

            <Input
              name={this.state.email}
              handleValue={this.handleValue}
              error={this.state.errorEmail}
              nameIdentify="email"
              title="Email"
            />

            <div className="input-group">
              <label>Profissao</label>
              <input
                type="text"
                name="profissao"
                value={this.state.profissao}
                onChange={this.handleValue}
              />
              <span>{this.state.profissao}</span>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </main>
    );
  }
}

export default App;
