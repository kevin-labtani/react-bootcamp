import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  render() {
    return (
      <div>
        <h1>Search for a food!</h1>
        <input
          type="text"
          name="query"
          placeholder="search for a food"
          id="query"
          onChange={this.handleChange}
          value={this.state.query}
        />
      </div>
    );
  }
}
