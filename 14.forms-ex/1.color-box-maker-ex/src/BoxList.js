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
    this.delBox = this.delBox.bind(this);
  }

  addBox(box) {
    // add id to new box
    let newBox = { ...box, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }));
  }

  delBox(id) {
    this.setState({
      boxes: [...this.state.boxes.filter(box => box.id !== id)]
    });
  }

  render() {
    return (
      <div>
        <h1>Box Maker</h1>
        <NewBoxForm addBox={this.addBox} />

        {this.state.boxes.map(box => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            delBox={this.delBox}
          />
        ))}
      </div>
    );
  }
}
