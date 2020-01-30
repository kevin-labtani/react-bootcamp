import React from "react";
import "./App.css";
import WiseSquare from "./WiseSquare";
import WiseSquareWithProps from "./WiseSquareWithProps";
import WiseSquareWithPropsExp from "./WiseSquareWithPropsExp";

function App() {
  return (
    <div className="App">
      <WiseSquare />
      <WiseSquareWithProps />
      <WiseSquareWithPropsExp />
    </div>
  );
}

export default App;
