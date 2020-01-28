// clicker state exercise
import React, { Component } from "react";

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      num: 1
    };

    // bind this for handler
    this.clickHandler = this.clickHandler.bind(this);
  }

  // handle click
  clickHandler(e) {
    // pick nr between 1 and 10
    let rand = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: rand });
  }

  render() {
    // conditional dependant on state
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
