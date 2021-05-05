import React from 'react'
import Todo from "./Todo"
import "./TodoList.css"

export default class Todos extends React.Component {

  componentWillUnmount() {
    console.log('Desmontado')
  }

  render() {

    const { todos } = this.props

    return (
      <section className="todolist-container">
        {todos.map(todo => <Todo key={todo} todo={todo} />)}
      </section>
    )
  }

}
