import React from "react";
import Deck from "../Deck/Deck";

import "./SelectDeck.css";

export default function SelectDeck(props) {
  let { decks, selectDeck } = props;
  decks = decks.map((deck, i) => {
    console.log(decks);
    return (
      <div onClick={() => selectDeck(i)}>
        <Deck deck={deck} />
      </div>
    );
  });
  return <div className="select-deck-container">{decks}</div>;
}
