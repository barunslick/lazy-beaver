import React, { Component } from 'react';
import states from '../../constants/states';
import Button from '../common/Button/index';
import './viewState.scss';


export class ViewState extends Component {

  render() {
    if (this.props.noOfItems){
    return (
      <div className="ViewState">
        {
          Object.entries(states)
          .map((item, index) => <Button key = {index} btnClassName = {`ViewChangeBtn ${this.props.currentShowing === index ? 'active' : '' }`} btnContent={item[0]} id = {index} onClick = {this.props.changeViewState.bind(this, index)}/>) 
        }
      </div>
    )
  }else{
    return null;
  }
  }
}

export default ViewState;
