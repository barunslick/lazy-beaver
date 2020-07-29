import React, { Component } from 'react';
import '../../css/components/checkBox.css';

export class Checkbox extends Component {
  render() {
    return (
      <input type="checkbox" className="itemCheckBox" onChange={this.props.toggleCompletion}></input>
    )
  }
}

export default Checkbox;
