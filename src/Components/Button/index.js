import React, { Component } from 'react';
import './Button.css';

const Button = ({getCategoryData, title}) => (
  <button onClick={() => getCategoryData(title)} className="Button ">
    {title}
  </button>
)

export default Button;