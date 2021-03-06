import React, { Component } from 'react';
import TodoItem from './TodoItem/index';

import './todo.scss';

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
    let itemContent = item.content.trim().toLowerCase();
    let searchText = this.props.searchText.trim().toLowerCase();
    if (itemContent.includes(searchText)){
      return true;
    }

    return false;
  }

  render() {
    let allItems = this.props.items;
    return (
      <div className="AllTodos">
        <ul>
          {
            allItems
            .filter(item => this.filterFromSearch(item))
            .filter(this.filterTodoItems)
            .map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} increaseCount={this.props.increaseCount} toggleCompletion={(id) => this.props.toggleCompletion.call(this, id) }/>)
          }
        </ul>
      </div>
    )
  }
}

export default AllTodos;
