import React, { Component } from 'react';
import states from '../../constants/states';
import ViewChangeBtn from '../Button/ViewChangeBtn';
import '../../css/components/viewState.css';


export class ViewState extends Component {

  render() {
    if (this.props.noOfItems){
    return (
      <div className="ViewState">
        {
          Object.entries(states).map((item, index) => <ViewChangeBtn key = {index} text={item[0]} id = {index} currentShowing = {this.props.currentShowing} changeViewState = {(newStateId) => this.props.changeViewState.call(this, newStateId)}/>) 
        }
      </div>
    )
  }else{
    return null;
  }
  }
}

export default ViewState;
