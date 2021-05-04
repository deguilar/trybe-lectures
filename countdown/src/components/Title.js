import React from 'react'
import PropTypes from 'prop-types'
import "./Title.css"

export default function Title({ title }) {
  return (
    <section className="title">
      {title}
    </section>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
