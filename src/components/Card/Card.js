import React, { Component } from 'react'
import TouchFlip from 'touchflip-react'

export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            isFlipped: false
        }
    }
    render() {
        let { front, back } = this.props.card
        return (
            <div className="card-container">
                <TouchFlip
                    isFlippable={true}
                    showBackSide={false}
                    flipOrientation={'horizontal'}
                    front={front}
                    back={back}
                />
            </div>
        )
    }
}