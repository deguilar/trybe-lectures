import React from 'react'
import PropTypes from 'prop-types';
import "./Titulo.css"

class Titulo extends React.Component {
  render() {
    const { titulo } = this.props

    return (
      <h1 className="titulo">
        {titulo}
      </h1>
    )
  }
}

Titulo.propTypes = {
  titulo: PropTypes.string
};

export default Titulo
