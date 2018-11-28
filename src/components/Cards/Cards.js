import React, { Component } from 'react';
import axios from 'axios'
import Card from '../Card/Card'
import './Cards.css';

class Cards extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      newQuestion: '',
      newAnswer: ''
    }
    this.deleteCard = this.deleteCard.bind(this)
  }
  componentDidMount() {
    axios.get('/flashcards').then((response) => {
      // console.log(response)
      this.setState({
        cards: response.data
      })
    })
  }
  deleteCard(cardId) {
    axios.delete(`/flashcards/${cardId}`).then((response) => {
      this.setState({
        cards: response.data
      })
    })
  }

  createCard() {
    let newCard = {
      question: this.state.newQuestion,
      answer: this.state.newAnswer
    }
    axios.post('/flashcards', newCard).then((response) => {
      this.setState({
        cards: response.data
      })
    })
  }

  render() {
    let cards = "You don't currently have any flashcards."

    if (this.state.cards[0]) {
      cards = this.state.cards.map((card) => {
        return (
          <Card key={card.id} card={card} />
        )
      })
    }

    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default Cards;