import TodoItem from './TodoItem';
import React, { Component } from 'react';
import '../../css/components/todo.css';

export class AllTodos extends Component {

  filterTodoItems = (item) => {
    if (this.props.currentShowing === 0){
      return item;
    }else if( this.props.currentShowing === 1 && item.completed === true ){
      return item;
    }else if(this.props.currentShowing === 2 && item.completed === false){
      return item;
    }
}

  render() {
    const allItems = this.props.items;
    return (
      <div className="AllTodos">
        <ul>
          {
            allItems.filter(this.filterTodoItems).map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} toggleCompletion={(id) => this.props.toggleCompletion.call(this, id)}/>)
          }
        </ul>
      </div>
    )
  }
}

export default AllTodos
