import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.delTodo(this.props.id);
  }

  render() {
    return (
      <li>
        <button>Edit</button>
        {this.props.task}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
