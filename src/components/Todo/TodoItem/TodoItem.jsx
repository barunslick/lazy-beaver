import React, { Component } from 'react';
import Checkbox from '../../common/CheckBox/index';
import colors from '../../../constants/color';
import './todoItem.scss';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor : this.props.item.completed ? colors.almostWhite : 'white',
    }
  }

  getPStyle = () => {
    return {
      textDecoration : this.props.item.completed ? 'line-through' : 'none',
    }
  }


  render() {
    return (
      <li style={this.getStyle()} className="TodoItem">
        <p className = {`TodoItem__p ${this.props.item.completed ? 'check' : ''}`}>{this.props.item.content}</p>
        <Checkbox item ={this.props.item} status = {this.props.item.completed} className = 'itemCheckBox' onChange = {this.props.toggleCompletion.bind(this, this.props.item.id)} />
      </li>
    )
  }
}

export default TodoItem;
