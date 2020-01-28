import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: 1, num2: 6 };

    this.roll = this.roll.bind(this);
  }

  // handle roll
  roll(e) {
    // pick nr between 1 and 6
    let rand1 = Math.floor(Math.random() * 6 + 1);
    let rand2 = Math.floor(Math.random() * 6 + 1);
    this.setState({ num1: rand1, num2: rand2 });
  }

  render() {
    return (
      <div>
        <Die roll={this.state.num1} />
        <Die roll={this.state.num2} />
        <div>
          <button onClick={this.roll} className="RollDice-button">
            Roll Dice!
          </button>
        </div>
      </div>
    );
  }
}
