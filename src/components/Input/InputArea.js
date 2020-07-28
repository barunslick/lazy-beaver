import React, { Component } from 'react';
import InputButton from '../Button/InputButton';
import '../../css/components/inputArea.css';

export class InputArea extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  addInput = (e)=>{
    this.setState({
      inputValue : e.target.value
    })    
  }

  render() {
    return (
      <div className="InputArea">
        <input className="newInput" placeholder="Add new Task" onChange = {(e)=>this.addInput(e)}></input>
        <InputButton name="inputButton" addItem={this.props.addItem.bind(this, this.state.inputValue)}/>
      </div>
    )
  }
}

export default InputArea;
