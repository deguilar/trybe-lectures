import React from 'react'

import Title from './components/Title';
import Input from './components/Input';
import Todos from './components/TodoList';
import data from "./data"
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleTodo = (event) => {
    const { value } = event.target;
    this.setState({ newTodo: value  })
  }

  handleAddTodo = (event) => {
    event.preventDefault();

    if(this.state.newTodo.length) {
      //nao adiciona string vazia
      this.setState((prevState) => {
        return {
          todos: [ ...prevState.todos, prevState.newTodo ],
          newTodo: ''
        }
      })
    }
  }

  render() {

    const { newTodo, todos } = this.state;

    return (
      <main className="app">
        <section className="container">
          <Title title="Todo App" />
          <Input value={newTodo} onChange={this.handleTodo} onAddTodo={this.handleAddTodo} />
          <Todos todos={todos} />
        </section>
      </main>
    );
  }
}

export default App;
