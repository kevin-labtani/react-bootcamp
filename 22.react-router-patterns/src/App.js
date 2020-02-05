import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Food from "./Food";
import Meal from "./Meal";
import Navbar from "./Navbar";
import FoodSearch from "./FoodSearch";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
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
            <Route
              exact
              path="/"
              render={routeProps => <FoodSearch {...routeProps} />}
              // or
              // component={FoodSearch}
            />
            <Route render={() => <h1>404 error</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
