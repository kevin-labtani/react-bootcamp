import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    console.log("in constructor!");
  }

  componentDidMount() {
    console.log("in component did mount");
    // updating time in the state every second
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    console.log("in render");
    return <h1>{this.state.time.getSeconds()}</h1>;
  }
}
