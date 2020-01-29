import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    nbBoxes: 16
  };

  render() {
    const boxes = [];
    for (let index = 0; index < this.props.nbBoxes; index++) {
      boxes.push(<ColorBox />);
    }

    return <div className="BoxContainer">{boxes}</div>;
  }
}
