import React from 'react';
import states from './constants/states';
import Header from './components/Header/index.js';
import AllTodos from './components/Todo';
import NewTaskInput from './components/Input/NewTaskInput';
import SearchInput from './components/Input/SearchInput';
import ViewState from './components/ViewState';

import './App.scss';
import './style/reset.scss';
import './style/style.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
      ],
      searchText: '',
      currentShowing: states.ALL,
      count: 0
    }
  }

  addItem = (item) => {
    this.setState({
      todos : [...this.state.todos,{
        id: Date.now(),
        content: item,
        completed: false
      }]
    })
  }

  changeCompletion = (id)=>{
    this.setState({
      todos: this.state.todos.map((todoItem) => {
        if (todoItem.id === id) todoItem.completed = !todoItem.completed;
        return todoItem;
      })
    })
  }

  changeViewState = (newState) => {
    this.setState({
      currentShowing: newState
    })
  }

  changeSearchText = (text) => {
    this.setState ({
      searchText: text,
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <NewTaskInput addItem = {this.addItem}/>    
          <ViewState noOfItems = {this.state.todos.length} currentShowing = {this.state.currentShowing} changeViewState= {(newState) => this.changeViewState (newState)}/>
          <SearchInput noOfItems = {this.state.todos.length} changeSearchText = {this.changeSearchText} />
          <AllTodos items={this.state.todos} currentShowing = {this.state.currentShowing} toggleCompletion={(itemId)=> this.changeCompletion(itemId)} searchText = {this.state.searchText} />
        </div>
      </div>
    );
  }
  
}

export default App;
