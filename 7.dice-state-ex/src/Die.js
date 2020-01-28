import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <span>
        <i
          // apply the wobble class depeding on the rolling props passe din by RollDice
          className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
            "wobble"}`}
        ></i>
      </span>
    );
  }
}
