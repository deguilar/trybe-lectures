import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      password: '',
      email: '',
      errorName: '',
      errorPassword: '',
      errorEmail: ''
    }
  }

  handleValue = (event) => {
    const { target: { value, name } } = event
    let newErrorName = ''

    if(name === 'name' && name.length > 10) {
      newErrorName = "Nome deve ser menor que 10";
      this.setState({ ...this.state, errorName: newErrorName })
      return;
    }

    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${this.state.name}`)
  }

  render() {
    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="input-group">
              <label>Nome</label>
              <input
                type="text"
                onChange={this.handleValue}
                value={this.state.name}
                name="name"
              />
              <span>{this.state.errorName}</span>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
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
                onChange={this.handleValue}
                name="password"
              />
              <span></span>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </section>

      </main>
    );
  }
}

export default App;
