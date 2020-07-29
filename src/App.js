import React from 'react';
import Header from './components/Header/Header';
import InputArea from './components/Input/InputArea';
import AllTodos from './components/Todo/AllTodos';
import './App.css';
import './css/reset.css';
import './css/style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          content: 'Hello mate',
          completed: false
        },
        {
          id: 1,
          content: 'Hello check',
          completed: false
        }
      ]
    }
  }

  addItem = (item) => {
    console.log('hey')
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


  render(){
    return (
      <div className="App">
        <Header />
        <div className="container">
          <InputArea addItem = {this.addItem}/>
          <AllTodos items={this.state.todos} toggleCompletion={(itemId)=> this.changeCompletion(itemId)}/>
        </div>
      </div>
    );
  }
  
}

export default App;
