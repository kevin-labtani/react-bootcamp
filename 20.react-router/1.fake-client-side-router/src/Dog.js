import React, { Component } from "react";

export default class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Dog!!!</h1>
        <h3>This dog is named: dog</h3>
        <img
          src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80"
          alt="a dog"
        />
      </div>
    );
  }
}
