import React, { Component } from "react";
import Coin from "./Coin";
import "./Flipper.css";

export default class Flipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nrTail: 0,
      nrHead: 0,
      nrFlip: 0,
      face: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  roll() {
    let newFace = Math.random() < 0.5 ? "head" : "tail";

    this.setState(st => {
      return {
        nrFlip: st.nrFlip + 1,
        face: newFace,
        nrHead: st.nrHead + (newFace === "head" ? 1 : 0),
        nrTail: st.nrTail + (newFace === "tail" ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.roll();
  }

  render() {
    return (
      <div className="Flipper">
        <h1>Flip a coin!</h1>
        <button onClick={this.handleClick}>Flip</button>
        <Coin face={this.state.face} />
        <div>
          Out of {this.state.nrFlip} you have {this.state.nrHead} Heads and{" "}
          {this.state.nrTail} Tails
        </div>
      </div>
    );
  }
}
