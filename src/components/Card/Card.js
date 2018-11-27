import React from 'react'
// import ReactCardFlip from 'react-card-flip'
import './Card.css'

export default function (props) {
    let { question, answer, id } = props.card

    return (
        <div>
            <div className="card">
                question: {question}
                answer: {answer}
            </div>

            <button onClick={() => props.delete(id)}>delete</button>
        </div>
    )
}