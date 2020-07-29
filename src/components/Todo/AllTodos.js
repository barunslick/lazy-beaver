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

  filterFromSearch = (item)=>{
    if (this.props.searchText === '') return true;
    if (item.content.includes(this.props.searchText)){
      return true;
    }
    return false;
  }

  render() {
    const allItems = this.props.items;
    console.log(this.props.searchText)
    return (
      <div className="AllTodos">
        <ul>
          {
            allItems
            .filter(item => this.filterFromSearch(item))
            .filter(this.filterTodoItems)
            .map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} toggleCompletion={(id) => this.props.toggleCompletion.call(this, id)}/>)
          }
        </ul>
      </div>
    )
  }
}

export default AllTodos
