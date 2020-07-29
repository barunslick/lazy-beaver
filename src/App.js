import React from 'react';
import Header from './components/Header/Header';
import InputArea from './components/Input/InputArea';
import AllTodos from './components/Todo/AllTodos';
import states from './constants/states';
import ViewState from './components/ViewStates/ViewState';
import './App.css';
import './css/reset.css';
import './css/style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
      ],
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

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <InputArea addItem = {this.addItem}/>
          <ViewState noOfItems = {this.state.todos.length} currentShowing = {this.state.currentShowing} changeViewState= {(newState) => this.changeViewState (newState)}/>
          <AllTodos items={this.state.todos} currentShowing = {this.state.currentShowing} toggleCompletion={(itemId)=> this.changeCompletion(itemId)}/>
        </div>
      </div>
    );
  }
  
}

export default App;
