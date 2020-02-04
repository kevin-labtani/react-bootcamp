import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
          <h2>
            <Link to="/soda">Soda</Link>
          </h2>
          <h2>
            <Link to="/chips">Chips</Link>
          </h2>
          <h2>
            <Link to="/sardines">Sardines</Link>
          </h2>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
