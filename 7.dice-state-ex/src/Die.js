import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    let dieNumber;
    switch (this.props.roll) {
      case 1:
        dieNumber = "fas fa-dice-one";
        break;
      case 2:
        dieNumber = "fas fa-dice-two";
        break;
      case 3:
        dieNumber = "fas fa-dice-three";
        break;
      case 4:
        dieNumber = "fas fa-dice-four";
        break;
      case 5:
        dieNumber = "fas fa-dice-five";
        break;
      case 6:
        dieNumber = "fas fa-dice-six";
        break;

      default:
        dieNumber = "fas fa-dice-one";
        break;
    }

    // let dieClass = dieNumber;
    // // let dieClass = `${dieNumber} animated wobble`;

    // setTimeout(() => {
    //   dieClass = `${dieNumber} animated wobble`;
    // }, 1500);

    return (
      <span className="Die">
        <i className={dieNumber}></i>
      </span>
    );
  }
}
