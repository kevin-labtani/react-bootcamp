import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export default class ZenQuote extends Component {
  constructor(props) {
    console.log("inside constructor")
    super(props);

    this.state = {
      quote: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log("inside component did mount")
    // load data from api
    axios
      .get(
        "https://api.github.com/zen?client_id=0a7c9d0478a3de8a5f22&client_secret=aec86047bee99c0e210df47bffa0f08fd5cb448d"
      )
      .then(res => {
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

  componentDidUpdate() {
    console.log("inside componenet did update");
  }

  render() {
    console.log("inside render")
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
