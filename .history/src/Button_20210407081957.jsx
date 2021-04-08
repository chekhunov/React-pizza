import React, { Component } from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом

function Button (props) {
    return (<button className=(classNames('button',{'button--outline': props.outline,
  }))>
  {props.children}
  </button>
  )
}

export default Button;
