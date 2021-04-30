import React from 'react';
import './App.css';
import Input from './components/Input';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      password: '',
      email: '',
      terms: true,
      errorName: '',
      errorPassword: '',
      errorEmail: ''
    }
  }

  handleValue = (event) => {
    const { target: { value, name } } = event
    let errorName = '', errorPassword = '', errorEmail = '';

    if(name === 'name' && value.length > 10) {
      errorName = "Nome deve ser menor que 10";
    }

    if(name === 'password' && value === '12345') {
      errorPassword = "Senha fácil demais";
    }

    if(name === 'email' && !value.includes('@')) {
      errorEmail = "email inválido";
    }

    this.setState({
      errorName,
      errorPassword,
      errorEmail,
      [name]: value
    })
  }

  handleCheck = (event) => {
    this.setState({ terms: event.target.checked })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.errorName === "" && this.state.errorName === "" && this.state.errorName === "" ) {
      const cadastroPessoa = {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        terms: this.state.terms,
      }
      console.log(cadastroPessoa)
      alert(`Pessoa ${this.state.name} cadastrada com sucesso`);

    }

  }

  render() {
    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          <form onSubmit={this.handleSubmit}>

            <Input
              name="name"
              value={this.state.name}
              error={this.state.errorName}
              handleChange={this.handleValue}
            />

            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                onChange={this.handleValue}
                name="email"
              />
              <span>{this.state.errorEmail}</span>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                onChange={this.handleValue}
                name="password"
              />
              <span>{this.state.errorPassword}</span>
            </div>

            <div className="input-group input-check">
              <label>Aceita os termos?</label>
              <input
                type="checkbox"
                name="terms"
                checked={this.state.terms}
                onChange={this.handleCheck}
              />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </main>
    );
  }
}

export default App;
