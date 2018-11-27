const express = require('express')
const app = express()

let cards = [
    {
        id: 0,
        front: 'Why did the chicken cross the road?',
        back: 'To get to the other side.'
    },
]
let id = 1

app.get('/flashcards', (req, res) => {
    res.send(cards)
})

app.delete('/flashcards/:cardId', (req, res) => {
    let { cardId } = req.params
    let indexToRemove = cards.findIndex((card) => {
        // console.log(card.id, cardId)
        return card.id === +cardId
    })
    if (indexToRemove !== -1) {
        cards.splice(indexToRemove, 1)
        res.send(cards)
    }
})

app.post('/flashcards', (req, res) => {
    req.body.id = id
    cards.push(req.body)
    res.send(cards)
})

const port = 4400
app.listen(port, () => console.log('server running on port ' + port))