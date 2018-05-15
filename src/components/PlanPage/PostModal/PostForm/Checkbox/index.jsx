import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Checkbox extends Component {
  state = {
    checked: this.props.checked,
  }

  handleClick = () => {
    const { onChange, media } = this.props
    this.setState(
      prevState => ({ checked: !prevState.checked }),
      () => {
        onChange(media, this.state.checked)
      },
    )
  }

  render() {
    const { checked } = this.state
    return (
      <div className={`Checkbox ${checked ? 'checked' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={this.handleClick}
          className="Checkbox__input"
        />
        <img
          src={this.props.smPath}
          alt="social media logo"
          onClick={this.handleClick}
          role="checkbox"
          aria-checked={checked}
          className="Checkbox__media"
        />
        <div
          onClick={this.handleClick}
          role="checkbox"
          aria-checked={checked}
          className={`Checkbox__logo ${checked ? 'checked' : ''}`}
          tabIndex={0}
        />
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  smPath: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox