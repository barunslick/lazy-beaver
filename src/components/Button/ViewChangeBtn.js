import React, { Component } from 'react';
import colors from '../../constants/color';
import '../../style/components/View/viewChangeBtn.scss';

export class ViewChangeBtn extends Component {

  getStyle = () => {
    if (this.props.currentShowing === this.props.id){
      return {
        backgroundColor : colors.baseColor,
        color: 'white',
      }
    }
  }

  render() {
    return (
    <button className="ViewChangeBtn" onClick = {this.props.changeViewState.bind(this, this.props.id)} style = {this.getStyle()}>{this.props.text}</button>
    )
  }
}

export default ViewChangeBtn;
