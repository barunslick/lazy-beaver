import React, { Component } from 'react';
import InputButton from '../Button/InputButton';
import '../../css/components/Input/inputArea.scss';

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
        <InputButton name="inputButton" addItemAndClear={this.addItemAndClear}/>
      </div>
    )
  }
}

export default InputArea;
