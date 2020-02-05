import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  handleClick(e) {
    // fake save to db
    alert("saved the food to db!");
    // redirect
    this.props.history.push(`/food/${this.state.query}`);
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
        <Link to={`/food/${this.state.query}`}>Go</Link>
        <button onClick={this.handleClick}>Save new food</button>
      </div>
    );
  }
}
