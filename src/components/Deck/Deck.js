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
    if (this.props.deck[0]) {
      deck = CardBuilder(deck).map(card => card.front)
    } else {
      deck = 'You have not selected a deck.'
    }
    return (
      <React.Fragment>
        {deck}

        {/* top interactable card */}
      </React.Fragment>
    )
  }
}