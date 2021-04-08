import React, { Component } from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом

function (props) {
  componentDidMount() {
    //в диспетчере елементов можно глянуть было ли внедрение
    console.log('Компонент внедрился');
  }
    console.log(this.props);

    return <button>{this.props.text}</button>;
  }
}

export default Button;
