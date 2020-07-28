import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../../css/components/todo.css';

export class AllTodos extends Component {

  render() {
    const allItems = this.props.items;
    return (
      <div className="AllTodos">
        <ul>
          {
            allItems.map((todoItem, index) => <TodoItem key={index} item={todoItem}/>)
          }
        </ul>
      </div>
    )
  }
}

export default AllTodos
