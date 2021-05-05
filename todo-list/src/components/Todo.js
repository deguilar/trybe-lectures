import React from 'react'
import "./Todo.css"

export default function Todo({ todo }) {
  return (
    <p className="todo">
      {todo}
    </p>
  )
}
