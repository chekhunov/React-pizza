import React from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
