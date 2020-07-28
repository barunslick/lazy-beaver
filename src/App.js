import React from 'react';
import Header from './components/Header/Header';
import InputArea from './components/Input/InputArea';
import AllTodos from './components/Todo/AllTodos';
import './App.css';
import './css/reset.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          content: 'Hello mate',
          completed: false
        },
        {
          content: 'Hello check',
          completed: false
        }
      ]
    }
  }

  addItem = (item) => {
    this.setState({
      todos : [...this.state.todos,{
        content: item,
        completed: false
      }]
    })
  }


  render(){
    return (
      <div className="App">
        <Header />
        <div class="container">
          <InputArea addItem = {this.addItem}/>
          <AllTodos items={this.state.todos} />
        </div>
      </div>
    );
  }
  
}

export default App;
