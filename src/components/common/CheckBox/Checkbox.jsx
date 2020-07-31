import React from 'react';

import './checkBox.scss';

export default function CheckBox({ className, status, onChange }) {
  return (
    <input type="checkbox" className={className} checked={status} onChange={onChange}></input>
  )
}


