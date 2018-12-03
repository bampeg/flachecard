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
    let deck = 'You have not selected a deck.'
    if(this.state.deck[0]){
      deck = CardBuilder(this.state.cards).map(card => card.front)
    }
    return (
      <React.Fragment>
        {deck}

        {/* top interactable card */}
      </React.Fragment>
    )
  }
}