import React, { Component } from "react";
import axios from "axios";

import Deck from "./components/Deck/Deck";
import SelectDeck from "./components/SelectDeck/SelectDeck";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      decks: [],
      selectedDeck: []
    };
    this.selectDeck = this.selectDeck.bind(this);
  }

  async componentDidMount() {
    const user = await axios.get("/login");
    const decks = await axios.get("/flachecards");

    this.setState({
      user: user.data,
      decks: decks.data
    });
  }

  selectDeck(index) {
    this.setState({
      selectedDeck: this.state.decks[index]
    });
  }

  render() {
    let { decks, user, selectedDeck } = this.state;
    let message = <h3>Please create a deck of flashcards.</h3>;
    return (
      <div>
        Welcome {user.name}
        {/* <MotivationalQuotes? /> */}
        {selectedDeck[0] ? <Deck deck={selectedDeck} /> : message}
        <SelectDeck decks={decks} selectDeck={this.selectDeck} />
      </div>
    );
  }
}
