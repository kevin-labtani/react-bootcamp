import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.colors)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  render() {
    return (
      <div
        className="ColorBox"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
