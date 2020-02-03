import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // add id to new todo; add new todo, and then clear form
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.addTodo(newTodo);
    this.setState({
      task: ""
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">task: </label>
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add a new task</button>
        </form>
      </div>
    );
  }
}
