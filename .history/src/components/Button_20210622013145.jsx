import React from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: 
}

export default Button;
