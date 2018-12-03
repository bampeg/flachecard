import React, { Component } from 'react'
import CardBuilder from './CardBuilder'

export default class Deck extends Component {
  constructor() {
    super()
    this.state = {
      deck: [],
      topCard: <></>
    }
  }
  render() {
    let { deck } = this.props
    console.log(deck)
    if (this.props.deck[0]) {
      deck = CardBuilder(deck).map(card => card.front)
    } else {
      deck = 'You have not selected a deck.'
    }
    return (
      <div className="deck">
        {deck}
        {/* top interactable card */}
      </div>
    )
  }
}