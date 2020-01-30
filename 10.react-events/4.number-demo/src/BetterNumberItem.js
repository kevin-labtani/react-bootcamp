import React, { Component } from "react";

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    this.props.remove(this.props.value);
  }

  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
