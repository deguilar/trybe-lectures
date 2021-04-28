import React from 'react'
import PropTypes from 'prop-types';
import './Imagem.css'

class Imagem extends React.Component {
  render() {
    const { imagem, alt } = this.props

    return (
      <img className="img" src={imagem} alt={alt} />
    )
  }
}

Imagem.propTypes = {
  imagem: PropTypes.string,
  alt: PropTypes.string,
};

export default Imagem
