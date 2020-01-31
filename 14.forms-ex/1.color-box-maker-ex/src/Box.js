import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.delBox(this.props.id);
  }

  boxStyle() {
    return {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor
    };
  }

  render() {
    return (
      <div>
        <div style={this.boxStyle()}></div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}
