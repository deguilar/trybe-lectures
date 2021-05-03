import React from 'react';
import './App.css';

class App extends React.Component {

  
  render() {
    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                onChange={this.handleValue}
                name="name"
                value={this.state.name}
              />
              <span>{this.state.errors.name}</span>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                onChange={this.handleValue}
                name="email"
                value={this.state.email}
              />
              <span>{this.state.errors.email}</span>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                onChange={this.handleValue}
                name="password"
                value={this.state.password}
              />
              <span>{this.state.errors.password}</span>
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
