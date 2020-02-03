import React, { Component } from "react";
import axios from "axios";

export default class ZenQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: ""
    };
  }

  componentDidMount() {
    // load data from api
    axios.get("https://api.github.com/zen").then(res => {
      this.setState({ quote: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}
