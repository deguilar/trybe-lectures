import React from 'react'
import "./Buttons.css"

export default function Buttons({ handleStart, handleClose }) {
  return (
    <section className="buttons">
      <button className="button-start" onClick={handleStart}>Start</button>
      <button className="button-close" onClick={handleClose}>Fechar</button>
    </section>
  )
}
