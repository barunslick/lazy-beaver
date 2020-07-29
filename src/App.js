import React from 'react';
import states from './constants/states';
import Header from './components/Header/Header';
import AllTodos from './components/Todo/AllTodos';
import InputArea from './components/Input/InputArea';

import ViewState from './components/ViewStates/ViewState';
import SearchArea from './components/Input/SearchArea';

import './App.css';
import './css/reset.css';
import './css/style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
      ],
      searchText: '',
      currentShowing: states.ALL
    }
  }

  addItem = (item) => {
    this.setState({
      todos : [...this.state.todos,{
        id: this.state.todos.length,
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
          <InputArea addItem = {this.addItem}/>    
          <ViewState noOfItems = {this.state.todos.length} currentShowing = {this.state.currentShowing} changeViewState= {(newState) => this.changeViewState (newState)}/>
          <SearchArea noOfItems = {this.state.todos.length} changeSearchText = {this.changeSearchText} />
          <AllTodos items={this.state.todos} currentShowing = {this.state.currentShowing} toggleCompletion={(itemId)=> this.changeCompletion(itemId)} searchText = {this.state.searchText}/>
        </div>
      </div>
    );
  }
  
}

export default App;
