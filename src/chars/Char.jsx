import React, { Component } from 'react'

export default class Char extends Component {
  constructor(props){
    super(props);
    this.state = {
      action: props.action,
    }
  }

  render() {
    const { action } = this.state;
    const { orderPlayer } = this.props;
    return (
      <img id={orderPlayer} className={orderPlayer} src={action} alt="fsf" />
    )
  }
}
