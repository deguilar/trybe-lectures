import React from 'react'
import "./Button.css"

export default function Button({ text, onClick, type="button" }) {
  return (
    <button onClick={onClick} className="button-container" type={type}>
      {text}
    </button>
  )
}
