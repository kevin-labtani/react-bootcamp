import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckId: "",
      isLoaded: false,
      remaining: "",
      newCardImg: "",
      newCardCode: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/").then(res => {
      this.setState({
        isLoaded: true,
        deckId: res.data.deck_id,
        remaining: res.data.remaining
      });
    });
  }

  handleClick() {
    axios
      .get(`http://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)
      .then(res => {
        console.log(res);
        this.setState({
          newCardImg: res.data.cards[0].image,
          newCardCode: res.data.cards[0].code,
          remaining: res.data.remaining
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <button
              onClick={this.handleClick}
              disabled={this.state.remaining <= 0}
            >
              Draw A Card!
            </button>
            <Card image={this.state.newCardImg} code={this.state.newCardCode} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
