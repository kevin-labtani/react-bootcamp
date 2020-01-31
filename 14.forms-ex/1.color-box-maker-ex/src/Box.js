import React, { Component } from "react";

export default class Box extends Component {
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
        <button onClick={this.props.delBox}>X</button>
      </div>
    );
  }
}
