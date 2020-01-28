import React, { Component } from "react";

export default class Button extends Component {
  render() {
    // example of react event inline
    return (
      <button
        onClick={function() {
          alert("CLICKED!");
        }}
      >
        Click me!
      </button>
    );
  }
}
