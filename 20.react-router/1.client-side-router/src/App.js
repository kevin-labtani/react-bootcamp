import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-nav">
            <NavLink exact activeClassName="active-link" to="/">
              About
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/dog">
              Dog
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/dog/c">
              Dog comp
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/dog/r">
              Dog render
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/contact">
              Contact
            </NavLink>
          </nav>
          <Route exact path="/" component={About} />
          <Route exact path="/dog/c" component={() => <Dog name="Muffins" />} />
          <Route exact path="/dog/r" render={() => <Dog name="Biscuits" />} />
          <Route exact path="/dog" render={() => <Dog name="Biscuits" />} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
