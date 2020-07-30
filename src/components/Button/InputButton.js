import React, { Component } from 'react';
import color from '../../constants/color.js';
import '../../css/components/Button/inputButton.scss';

const buttonStyle ={
  width: '40px',
  height: '40px',
  border: 'none',
  backgroundColor: color.baseColor,
  fontSize: '20px',
  borderRadius: '20px',
  color: 'white',
}


export class InputButton extends Component {
  render() {
    return (
      <button className={this.props.name} style={buttonStyle} onClick = {this.props.addItemAndClear}>+</button>
    )
  }
}

export default InputButton;
