import React, { Component } from "react";
import "./LotteryBall.css"

export default class LotteryBall extends Component {
  render() {
    return <div className="LotteryBall">{this.props.number}</div>;
  }
}
