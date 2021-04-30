import React from 'react'

class Input extends React.Component {
  render() {

    const { handleChange, value, error } = this.props

    return (
      <div className="input-group">
        <label>Nome</label>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          name="name"
          style={{ borderColor: error ? 'red' : '' }}
        />
        <span>{error}</span>
      </div>
    )
  }
}

export default Input
