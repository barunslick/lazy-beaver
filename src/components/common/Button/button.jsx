import React from 'react';

import './button.scss';

export default function Button ({btnClassName, btnContent,onClick}){
  return(
    <button className={btnClassName} onClick={onClick}>{btnContent}</button>
  )
}

