import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_URL = "http://deckofcardsapi.com/api/deck/";

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: null,
      drawnCards: []
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(API_URL + "new/shuffle/");
    this.setState({ deck: deck.data });
  }

  async getCard() {
    let deck_id = this.state.deck.deck_id;
    try {
      let cardRes = await axios.get(`${API_URL}${deck_id}/draw/`);
      if (!cardRes.data.success) {
        // check for success instead of remaining, will catch more errors
        throw new Error("No cards remaining");
      }
      let newCard = cardRes.data.cards[0];
      this.setState(st => ({
        drawnCards: [
          ...st.drawnCards,
          {
            id: newCard.code,
            image: newCard.image,
            name: `${newCard.value} of ${newCard.suit}`
          }
        ]
      }));
    } catch (e) {
      alert(e);
    }
  }

  render() {
    const cards = this.state.drawnCards.map(c => (
      <Card key={c.id} image={c.image} name={c.name} />
    ));

    return (
      <div className="Deck">
        <h1 className="Deck-title">Card Dealer</h1>
        <h2 className="Deck-title Deck-subtitle">
          A little demo made with React
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Draw A Card!
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}
