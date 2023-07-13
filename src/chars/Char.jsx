import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import AudioEffect from '../components/AudioEffect';

export default class Char extends Component {
  render () {
    const { orderPlayer, action } = this.props

    return (<>
      <img id={orderPlayer} className={orderPlayer} src={action} alt="fsf" />
    </>)
  }
}

Char.propTypes = {
  orderPlayer: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}
