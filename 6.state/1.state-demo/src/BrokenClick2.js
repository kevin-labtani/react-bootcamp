import React, { Component } from "react";

export default class BrokenClick2 extends Component {
  // alternative using the new public fields syntax

  state = {
    clicked: false
  };

  handleClick = e => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "Not clicked!"}</h1>
        {/* handleClick passed as a callback, not actually executed so don't pass this.handleClick() */}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
