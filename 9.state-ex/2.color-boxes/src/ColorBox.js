import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

export default class ColorBox extends Component {
  static defaultProps = {
    colors: [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4caf50",
      "#8bc34a",
      "#cddc39",
      "#ffeb3b",
      "#ff9800",
      "#ff5722",
      "#795548",
      "#9e9e9e",
      "#607d8b",
      "#ffc107"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.colors)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newColor = choice(this.props.colors);
    this.setState(st => {
      return {
        color: newColor
      };
    });
  }

  render() {
    return (
      <div
        className="ColorBox"
        onClick={this.handleClick}
        style={{ backgroundColor: `${this.state.color}` }}
      ></div>
    );
  }
}
