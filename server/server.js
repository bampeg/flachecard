const express = require('express')
const app = express()
const { decks } = require('./decks')

app.get('/flashcards', (req, res) => {
    res.send(decks[0])
})

app.delete('/flashcards/:cardId', (req, res) => {
    let { cardId } = req.params
    let indexToRemove = decks.findIndex((card) => {
        return card.id === +cardId
    })
    if (indexToRemove !== -1) {
        decks.splice(indexToRemove, 1)
        res.send(decks)
    }
})

app.post('/flashcards', (req, res) => {
    req.body.question
    decks.push(req.body)
    res.send(decks)
})

const port = 4400
app.listen(port, () => console.log('server running on port ' + port))