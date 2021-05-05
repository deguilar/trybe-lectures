import React from 'react'
import PropTypes from 'prop-types'
import "./Buttons.css"

export default function Buttons({ onStart, onClose }) {
  return (
    <section className="buttons">
      <button className="button-start" onClick={onStart}>Start</button>
      <button className="button-close" onClick={onClose}>Fechar</button>
    </section>
  )
}

Buttons.propTypes = {
  onStart: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

