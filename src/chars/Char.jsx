import React, { Component } from 'react'

export default class Char extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { orderPlayer, action } = this.props;
    console.log(action);
    console.log(orderPlayer)
    return (
      <img id={orderPlayer} className={orderPlayer} src={action} alt="fsf" />
    )
  }
}
