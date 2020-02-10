import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterClass />
        <CounterHooks />
        <Toggler/>
      </div>
    );
  }
}

export default App;
