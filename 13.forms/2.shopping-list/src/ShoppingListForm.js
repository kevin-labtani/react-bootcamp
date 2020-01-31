import React, { Component } from "react";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      qty: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state); // state is an object
    this.setState({ name: "", qty: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
          />{" "}
          <label htmlFor="qty">qty:</label>
          <input
            id="qty"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
            type="text"
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}
