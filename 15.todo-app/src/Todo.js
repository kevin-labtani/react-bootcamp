import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.task}
        <button onClick={this.props.delTodo}>X</button>
      </div>
    );
  }
}
