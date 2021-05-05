import React from 'react'
import Button from './Button'
import "./Input.css"

export default function Input({ value, onAddTodo, onChange }) {
  return (
    <form onSubmit={onAddTodo} className="input-todo">
      <input value={value} onChange={onChange} />
      <Button type="submit" text="+" />
    </form>
  )
}
