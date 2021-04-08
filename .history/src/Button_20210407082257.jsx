import React from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом

const Button = (props) => {
  return (
    <button
      className={classNames('button', {
        'button--outline': props.outline,
      })}>
      {props.children}
    </button>
  );
};

export default Button;
