import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Food from "./Food";
import Meal from "./Meal";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/food/:name"
            // component={Food}
            render={routeProps => <Food {...routeProps} />}
          />

          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
        </div>
      </Router>
    );
  }
}
