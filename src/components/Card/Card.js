import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import Side from './Side'
import './Card.css'

export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            isFlipped: false
        }
        this.flipCard = this.flipCard.bind(this)
    }
    flipCard(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    }
    render() {
        let { front, back } = this.props.card
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <Side key="front">
                    {front}
                    <button onClick={this.flipCard}>Click</button>
                </Side>
                <Side key="back">
                    {back}
                    <button onClick={this.flipCard}>Click</button>
                </Side>
            </ReactCardFlip>
        )
    }
}