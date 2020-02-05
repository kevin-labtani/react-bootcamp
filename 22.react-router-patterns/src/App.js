import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Food from "./Food";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/food/:name"
            render={routeProps => <Food {...routeProps} />}
          />
        </div>
      </Router>
    );
  }
}
