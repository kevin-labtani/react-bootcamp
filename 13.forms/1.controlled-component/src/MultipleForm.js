import React, { Component } from "react";

export default class MultipleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "", email: "", password: "" });
  }

  render() {
    return (
      <div>
        <h1>Form demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
