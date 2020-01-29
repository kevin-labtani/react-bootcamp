import React, { Component } from "react";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };

    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  // avoid doing it this way
  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  // tripleKill() {
  //   // not working!!
  //   // react only enact the last call, has to do with how react is combining the calls
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }

  // // fixed version
  // tripleKill() {
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  // }

  // refactor
  incrementScore(oldState) {
    return { score: oldState.score + 1 };
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}
