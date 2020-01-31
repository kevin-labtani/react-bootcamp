import React, { Component } from "react";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      backgroundColor: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({ height: "", width: "", backgroundColor: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">height: </label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="width">width: </label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="backgroundColor">backgroundColor: </label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Add a new box</button>
        </form>
      </div>
    );
  }
}
