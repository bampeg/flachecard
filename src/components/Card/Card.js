import React, { Component } from 'react'
import TouchFlip from 'touchflip-react'
import OneSide from './OneSide'

export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            isFlipped: false
        }
    }

    render() {
        let { frontContent, backContent } = this.props.card
        return (
            <div className="card-container">
                <TouchFlip
                    isFlippable={true}
                    showBackSide={false}
                    flipOrientation={'horizontal'}
                    front={<OneSide side="front" content={frontContent} />}
                    back={<OneSide side="back" content={backContent} />}
                />
            </div>
        )
    }
}