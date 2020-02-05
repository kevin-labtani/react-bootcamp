import React, { Component } from "react";

export default class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkName = this.props.match.params.drinkName;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>
          this is a meal of {foodName} & {drinkName}
          <img src={foodUrl} alt={foodName} />
          <img src={drinkUrl} alt={drinkName} />
        </h1>
      </div>
    );
  }
}
