import React, { Component } from 'react';
import '../../css/components/header.css';
import color from '../../constants/color.js';


const HeaderStyle = {
  backgroundColor: 'none',
  color: color.baseColor,
}


export class Header extends Component {
  render() {
    return (
      <div className="Header" style= {HeaderStyle}>
        <div className="container">
          <h1>Lazy Beaver</h1>
        </div>
        
      </div>
    )
  }
}

export default Header;
