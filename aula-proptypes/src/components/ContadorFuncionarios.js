import React from 'react'
import PropTypes from 'prop-types';
import './ContadorFuncionarios.css'

class ContadorFuncionarios extends React.Component {
  render() {
    const { numero } = this.props;

    return (
      <div className="qtd-func">
        Quantidade de funcionários: <span>{numero}</span>
      </div>
    )
  }
}

ContadorFuncionarios.propTypes = {
  numero: PropTypes.number
};

export default ContadorFuncionarios
