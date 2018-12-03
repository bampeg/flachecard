import React, { Component } from 'react'
import axios from 'axios'

// import Cards from './components/Cards/Cards'
import Deck from './components/Deck/Deck'
// import Card from './components/Card/Card'
import Menu from './components/Menu/Menu'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
    }
  }
  componentDidMount() {
    axios
      .get('/flashcards')
      .then((response) => {
        this.setState({
          cards: response.data
        })
      })
  }
  render() {
    let { cards } = this.state
    // let cards = "You don't currently have any flashcards."
    // if (this.state.cards[0]) {
    //   cards = this.state.cards.map((card) => {
    //     return (
    //       <Card key={card.id} card={card} />
    //     )
    //   })
    // }
    return (
      <React.Fragment>
        {/* <MotivationalQuotes /> */}
        <Menu color="orange" />
        {/* <Cards /> */}
        {cards[0] ? <Deck deck={cards} /> : "no deck"}
      </React.Fragment>
    )
  }
}