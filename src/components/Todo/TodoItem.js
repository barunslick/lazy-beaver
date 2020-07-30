import React, { Component } from 'react';
import Checkbox from '../Button/Checkbox';
import colors from '../../constants/color';
import '../../style/components/Todo/todoItem.scss';

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
        <p className="TodoItem__content" style={this.getPStyle()}>{this.props.item.content}</p>
        <Checkbox item ={this.props.item} toggleCompletion= {this.props.toggleCompletion.bind(this, this.props.item.id)} />
      </li>
    )
  }
}

export default TodoItem
