import React, { Component } from "react";
import uuid from "uuid/v4";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: []
    };

    this.addBox = this.addBox.bind(this);
  }

  addBox(box) {
    // add id to new box
    let newBox = { ...box, id: uuid() };
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }

  delBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        // use an arrow function for variety's sake, can also create constructor in <Box />, bind, etc
        delBox={() => this.delBox(box.id)}
      />
    ));

    return (
      <div>
        <h1>Box Maker</h1>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}
