import React from 'react';
import './App.css';
import Input from './components/Input';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      senha: '',
      error: {
        name: '',
        senha: ''
      },
      errorName: '',
      errorSenha: ''
    }
  }

  // handleName = (event) => {
  //   this.setState({ name: event.target.value })
  // }

  // handleEmail = (event) => {
  //   this.setState({ email: event.target.value })
  // }

  // handlePassword = (event) => {
  //   const { value } = event.target
  //   this.setState({ senha: value })
  // }

  handleValue = (event) => {
    const { name, value } = event.target

    if(value.length > 10 && name === "name") {
      this.setState({ errorName: "Nao pode maior que 10" })
      return; //evita o else
    }

    if(value === "12345" && name === "senha") {
      this.setState({ errorSenha: "Senha invalida" })
      return; //evita o else
    }

    this.setState({ [name]: value })

  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, errorName, errorSenha } = this.state;

    if(errorName === "" && errorSenha === "") {
      console.log(`Pessoa ${name} cadastrada com sucesso`)
    }

  }

  render() {

    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          
          <form onSubmit={this.handleSubmit}>

            <Input
              name={this.state.name}
              handleValue={this.handleValue}
              errorName={this.state.errorName}
            />

            <div className="input-group">
              <label>Email</label>
              <input
                value={this.state.email}
                type="text"
                onChange={this.handleValue}
                name="email"
              />
              <span></span>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={this.state.senha}
                onChange={this.handleValue}
                name="senha"
              />
              <span>{this.state.errorSenha}</span>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </main>
    );
  }
}

export default App;
