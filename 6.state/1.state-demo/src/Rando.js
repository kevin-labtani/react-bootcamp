import React, { Component } from "react";

export default class Rando extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    };
    // call makeTimer here, we haven't learned about event yet
    this.makeTimer();
  }

  // update state every second by setting num to a random value between 0 and maxNum
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }

  render() {
    return <h1>{this.state.num}</h1>;
  }
}
