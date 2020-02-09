import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={() => <h1>palette goes here</h1>} />
          <Route
            exact
            path="/palette/:id"
            render={() => <h1>single palette</h1>}
          />
        </Switch>
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Router>
    );
  }
}

export default App;
