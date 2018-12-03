const express = require('express')
const app = express()

let decks = [
    [
        {
            id: 0,
            front: 'Why did the chicken cross the road?',
            back: 'To get to the other side.'
        },
        {
            id: 1,
            front: 'What is your favorite colour?',
            back: 'Red..no Green, ahhhhh!'
        },
        {
            id: 2,
            front: 'What is the answer to life, the universe, and everything?',
            back: '42'
        },
    ]
]
app.get('/flashcards', (req, res) => {
    res.send(cards)
})

app.delete('/flashcards/:cardId', (req, res) => {
    let { cardId } = req.params
    let indexToRemove = cards.findIndex((card) => {
        return card.id === +cardId
    })
    if (indexToRemove !== -1) {
        cards.splice(indexToRemove, 1)
        res.send(cards)
    }
})

app.post('/flashcards', (req, res) => {
    req.body.question
    cards.push(req.body)
    res.send(cards)
})

const port = 4400
app.listen(port, () => console.log('server running on port ' + port))