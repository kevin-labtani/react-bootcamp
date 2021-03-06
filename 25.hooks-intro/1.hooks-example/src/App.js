import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHooks from "./SimpleFormInputHook";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <CounterClass />
        <CounterHooks />
        <Toggler />
        <SimpleFormClass />
        <SimpleFormHooks />
        <SimpleFormInputHooks />
        <Clicker /> */}
        <SWMovies />
      </div>
    );
  }
}

export default App;
