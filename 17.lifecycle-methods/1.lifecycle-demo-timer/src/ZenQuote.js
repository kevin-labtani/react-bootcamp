import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export default class ZenQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    // load data from api
    axios.get("https://api.github.com/zen").then(res => {
      // add delay to better show loading state
      setTimeout(
        function() {
          this.setState({
            quote: res.data,
            isLoaded: true
          });
        }.bind(this),
        2000
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}
