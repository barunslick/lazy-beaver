import React, { Component } from 'react';
import Button from '../../common/Button';
import './newTaskInput.scss';

export class InputArea extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  addInput = (e)=>{
    this.setState ({
      inputValue : e.target.value
    })
  }

  addItemAndClear = () =>{
    if (this.state.inputValue){
      this.props.addItem.call(this, this.state.inputValue);
      this.setState({
        inputValue : ''
      })
    }
  }

  render() {
    return (
      <div className="InputArea">
        <input className="newInput" placeholder="Add new Task" value={this.state.inputValue} onChange = {(e)=>this.addInput(e)}></input>
        <Button btnContent="+" onClick={this.addItemAndClear} btnClassName="addButton"/>
      </div>
    )
  }
}

export default InputArea;
