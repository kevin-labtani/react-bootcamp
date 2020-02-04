import React, { Component } from "react";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <VendingMachine />} />
            <Route exact path="/chips" render={() => <Chips />} />
            <Route exact path="/sardines" render={() => <Sardines />} />
            <Route exact path="/soda" render={() => <Soda />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
