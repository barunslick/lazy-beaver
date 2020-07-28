import React, { Component } from 'react';
import color from '../../constants/color.js';
import '../../css/components/inputButton.css';

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
      <button className={this.props.name} style={buttonStyle} onClick = {this.props.addItem} >+</button>
    )
  }
}

export default InputButton;
