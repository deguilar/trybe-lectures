import React from 'react'
import Todo from "./Todo"
import "./TodoList.css"

export default function Todos({ todos }) {
  return (
    <section className="todolist-container">
      {todos.map(todo => <Todo key={todo} todo={todo} />)}
    </section>
  )
}
