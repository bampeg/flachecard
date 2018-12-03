import React from 'react'
import OneSide from '../Card/OneSide'

export default (cards) => {
  cards = cards.map(card => {
    return {
      front: <OneSide
        key={`front${card.id}`}
        side="front"
        content={card.front} />,
      back: <OneSide
        key={`back${card.id}`}
        side="back"
        content={card.back} />
    }
  })
  return cards
}