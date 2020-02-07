import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  // slider method tu update state when slider value changes
  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.level
    ].map(color => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className="Palette">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
