import React, { Component } from "react";

export default class Button extends Component {
  render() {
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
