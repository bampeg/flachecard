import React, { Component } from "react";
import CardBuilder from "../Card/CardBuilder";
import Card from "../Card/Card";

export default class Deck extends Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      topCard: <></>
    };
  }
  render() {
    let { deck } = this.props;
    console.log(deck);
    if (this.props.deck[0]) {
      deck = CardBuilder(deck).map((card, i) => {
        if (i === 0) {
          return <Card card={card} />;
        }
        // else {
        //   return card.front;
        // }
      });
    } else {
      deck = "You have not selected a deck.";
    }
    console.log(deck);
    return (
      <div className="deck">
        {deck}
        {/* top interactable card */}
      </div>
    );
  }
}
