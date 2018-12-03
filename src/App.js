import React, { Component } from 'react'
import axios from 'axios'

import Deck from './components/Deck/Deck'
import SelectDeck from './components/SelectDeck/SelectDeck'
import Menu from './components/Menu/Menu'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      decks: [],
      selectedDeck: []
    }
    this.selectDeck = this.selectDeck.bind(this)
  }
  componentDidMount() {
    axios
      .get('/flashcards')
      .then((response) => {
        console.log(response)
        this.setState({
          decks: response.data
        })
      })
  }
  selectDeck(index) {
    this.setState({
      selectedDeck: this.state.decks[index]
    })
  }
  render() {
    let { decks, selectedDeck } = this.state
    let message = <h3>Please create a deck of flashcards.</h3>
    return (
      <React.Fragment>
        {/* <MotivationalQuotes? /> */}
        <Menu color="orange" />
        {selectedDeck[0] ? <Deck deck={selectedDeck} /> : message}
        <SelectDeck decks={decks} selectDeck={this.selectDeck} />
      </React.Fragment>
    )
  }
}