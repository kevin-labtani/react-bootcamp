import React, { Component } from "react";

export default class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    let rand = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: rand });
  }

  render() {
    let condition;
    if (this.state.num == 7) {
      condition = <h3>YOU WIN!</h3>;
    } else {
      condition = <button onClick={this.clickHandler}>Random Number</button>;
    }

    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {condition}
      </div>
    );
  }
}
