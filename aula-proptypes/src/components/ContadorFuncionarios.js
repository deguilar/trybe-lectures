import React from 'react'
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

export default ContadorFuncionarios
