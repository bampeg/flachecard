import React from "react";
import "./Card.css";

const OneSide = props => {
  let { side, content } = props;
  return (
    <div className="card">
      <div className={side} />
      {content}
    </div>
  );
};

export default cards => {
  cards = cards.map(card => {
    return {
      front: (
        <OneSide key={`front${card.id}`} side="front" content={card.front} />
      ),
      back: <OneSide key={`back${card.id}`} side="back" content={card.back} />
    };
  });
  return cards;
};
