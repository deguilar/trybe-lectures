import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="app">

        <section className="form-user">
          <h1>Cadastro</h1>
          <form>

            <div className="input-group">
              <label>Nome</label>
              <input type="text" />
              <span></span>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="text" />
              <span></span>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" />
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
