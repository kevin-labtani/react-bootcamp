import React, { Component } from "react";
import Head from "./head.jpeg";
import Tail from "./tail.jpeg";

export default class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        {this.props.face === "head" && <img src={Head} alt={this.props.face} />}
        {this.props.face === "tail" && <img src={Tail} alt={this.props.face} />}
      </div>
    );
  }
}
