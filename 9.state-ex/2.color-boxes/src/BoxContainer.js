import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    nbBoxes: 16,
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

  render() {
    const boxes = [];
    for (let index = 0; index < this.props.nbBoxes; index++) {
      boxes.push(<ColorBox colors={this.props.colors} />);
    }

    return <div className="BoxContainer">{boxes}</div>;
  }
}
