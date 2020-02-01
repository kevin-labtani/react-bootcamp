import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let ruleRow;
    if (this.props.score === undefined) {
      ruleRow = (
        <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
          <td className="RuleRow-name">{this.props.name}</td>
          <td className="RuleRow-score">{this.props.score}</td>
        </tr>
      );
    } else {
      ruleRow = (
        <tr className="RuleRow RuleRow-disabled" onClick={null}>
          <td className="RuleRow-name">{this.props.name}</td>
          <td className="RuleRow-score">{this.props.score}</td>
        </tr>
      );
    }
    return ruleRow;
  }
}

export default RuleRow;
