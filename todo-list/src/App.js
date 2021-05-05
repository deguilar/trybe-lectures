import React from 'react'

import Title from './components/Title';
import Input from './components/Input';
import Todos from './components/TodoList';
import { getDataFromApi, postDataApi } from "./utils/fakeApi"
import './App.css';
import Button from './components/Button';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      todos: [],
      loading: false,
      newTodo: ''
    }
  }

  componentDidMount() {
    this.setState({ loading: true }, async() => {
      const response = await getDataFromApi()
      this.setState({ todos: response, loading: false })
    })
  }

  handleTodo = (event) => {
    const { value } = event.target;
    this.setState({ newTodo: value  })
  }

  handleAddTodo = (event) => {
    event.preventDefault();

    if(this.state.newTodo.length) {
      //nao adiciona string vazia
      this.setState({ loading: true }, this.saveTodo)
    }
  }

  handleClearAll = () => {
    this.setState({ todos: [] })
  }

  saveTodo = async () => {
    await postDataApi(this.state.newTodo);

    this.setState((prevState) => ({
      todos: [ ...prevState.todos, prevState.newTodo ],
      newTodo: '',
      loading: false
    }))
  }

  render() {

    const { newTodo, todos, loading } = this.state;

    return (
      <main className="app">
        <section className="container">
          <Title title="Todo App" />
          <Input value={newTodo} onChange={this.handleTodo} onAddTodo={this.handleAddTodo} />
          {loading ? "Loading..." : <Todos todos={todos} />}

          {todos.length > 0 && <Button text="Limpar tudo" onClick={this.handleClearAll}/>}
        </section>
      </main>
    );
  }
}

export default App;
