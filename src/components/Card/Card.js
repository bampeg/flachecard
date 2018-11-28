import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import Side from './OneSide'

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
        let { frontContent, backContent } = this.props.card
        return (
            <ReactCardFlip
                isFlipped={this.state.isFlipped}
                infinite={true}
                flipSpeedBackToFront={0.2}
                flipSpeedFrontToBack={0.2}>
                <Side side="front" flipCard={this.flipCard} key="front">
                    {frontContent}
                </Side>
                <Side side="back" flipCard={this.flipCard} key="back">
                    {backContent}
                </Side>
            </ReactCardFlip>
        )
    }
}