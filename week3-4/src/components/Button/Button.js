import React from 'react';
import './Button.css';

const Button = (props) => {
  const clicked = () => {
    props.callback();
  };

  return (
    <button
      id={'btn-' + props.id}
      className={props.className}
      onClick={() => clicked()}>
      {props.label}
    </button>
  )
}

export default Button;