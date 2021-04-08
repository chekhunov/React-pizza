import React, { Component } from 'react';

class Button extends React.Component {
  componentDidMount() {
    //в диспетчере елементов можно глянуть было ли внедрение
    console.log("Компонент внедрился");
  }
  render(props){

    console.log(this.props);

    return (
    <button></button>
    )
  }
}

export default Button;
