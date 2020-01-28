import React, { Component } from "react";

export default class BrokenClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    // react is calling handleclick, out of context and not on our instance, so we need to bind this or use an arrow function in the click handler
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ clicked: true });
  }

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
