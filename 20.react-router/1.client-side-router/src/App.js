import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/dog" component={Dog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
