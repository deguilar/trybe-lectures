import React from 'react'
import "./Input.css"

export default function Input({ value, onAddTodo, onChange }) {
  return (
    <form onSubmit={onAddTodo} className="input-todo">
      <input value={value} onChange={onChange} />
      <button>+</button>
    </form>
  )
}
