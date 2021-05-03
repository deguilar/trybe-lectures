import React, { Component } from 'react'

class Input extends Component {
  render() {

    const { name, handleValue, errorName } = this.props

    return (
      <div className="input-group">
        <label>Nome</label>
        <input
          value={name}
          type="text"
          onChange={handleValue}
          name="name"
        />
        <span>{errorName}</span>
      </div>
    )
  }
}

export default Input