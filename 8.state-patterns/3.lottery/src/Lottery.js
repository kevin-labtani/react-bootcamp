import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);

    this.state = {
      nums: new Array(this.props.numBalls).fill(0)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // generate new nums between 1 and maxnum and populate the array with those
  generate() {
    this.setState(st => ({
      nums: st.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }

  // stylistic choice to have handeLcick call generate in order to have standard name for our handlers
  handleClick(e) {
    this.generate();
  }

  render() {
    return (
      <div className="Lottery">
        <h3>{this.props.title}</h3>
        <div>
          {this.state.nums.map(n => (
            <LotteryBall number={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Draw Balls!</button>
      </div>
    );
  }
}
