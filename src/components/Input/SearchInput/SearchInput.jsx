import React, { Component } from 'react';

import './searchInput.scss';

export class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  addInput = (e) => {
    this.setState({
      inputValue: e.target.value
    }, () => {
      this.props.changeSearchText.call(this, this.state.inputValue)
    })
  }

  clearText = () => {
    this.setState({
      inputValue: ''
    }, () => {
      this.props.changeSearchText.call(this, this.state.inputValue)
    })
  }

  render() {
    if (this.props.noOfItems) {
      return (
        <div className="SearchArea">
          <input className="searchtext" placeholder="Search" value={this.state.inputValue} onChange={this.addInput}></input>
          <button className="searchBtn" onClick={this.clearText}><i className="fas fa-times"></i></button>
        </div>
      )
    }else{
      return null;
    }
  }
}

export default SearchInput;
