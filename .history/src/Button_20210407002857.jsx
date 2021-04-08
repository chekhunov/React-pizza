import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  componentDidMount() {
    //в диспетчере елементов можно глянуть было ли внедрение
    console.log('Компонент внедрился');
  }
  render() {
    console.log(this.props);

    return <button>{this.props.text}</button>;
  }
}

export default Button;
