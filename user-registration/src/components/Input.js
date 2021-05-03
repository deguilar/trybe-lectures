import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {


  render() {

    const { title, name, handleValue, error, nameIdentify } = this.props

    return (
      <div className="input-group">
        <label>{title}</label>
        <input
          type="text"
          name={nameIdentify}
          value={name}
          onChange={handleValue}
        />
        <span>{error}</span>
      </div>
    )
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleValue: PropTypes.func,
  error: PropTypes.string,
  nameIdentify: PropTypes.string
}