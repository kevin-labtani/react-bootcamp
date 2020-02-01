import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  // nb: differetn handleclick than this.props.handleclick
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numWords, val, locked, disabled, rolling } = this.props;
    let classes = `Die fas fa-5x fa-dice-${numWords[val - 1]} `;
    if (locked) classes += "Die-locked ";
    if (rolling) classes += "Die-rolling";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
