import React from 'react';
import './Button.css';

const Button = (props) => {
  const clicked = () => {
    props.callback();
  };

  return (
    <button
      className="btn"
      onClick={() => clicked()}>
      {props.label}
    </button>
  )
}

export default Button;