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
          <h1>Lazy Beaver</h1>
      </div>
    )
  }
}

export default Header;
