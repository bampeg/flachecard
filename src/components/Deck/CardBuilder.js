import React from 'react'
import OneSide from '../Card/OneSide'

export default (cards) => {
  cards = cards.map(card => {
    return {
      front: <OneSide
        side="front"
        content={card.front} />,
      back: <OneSide
        side="back"
        content={card.back} />
    }
  })
  return cards
}