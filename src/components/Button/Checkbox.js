import React, { Component } from 'react';
import '../../style/components/CheckBox/checkBox.scss';

export class Checkbox extends Component {

  render() {
    return (
      <input type="checkbox" className="itemCheckBox" checked = {this.props.item.completed} onChange={this.props.toggleCompletion}></input>
    )
  }
}

export default Checkbox;
