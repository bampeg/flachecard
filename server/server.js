require('dotenv').config()
const express = require('express')
const massive = require('massive')

const { decks } = require('./decks')
const {
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    console.log('db connected')
    app.set('db', db)
})

app.get('/flachecards', (req, res) => {
    res.send(decks)
})

// app.delete('/flachecards/:cardId', (req, res) => {
//     let { cardId } = req.params
//     let indexToRemove = decks.findIndex((card) => {
//         return card.id === +cardId
//     })
//     if (indexToRemove !== -1) {
//         decks.splice(indexToRemove, 1)
//         res.send(decks)
//     }
// })

// app.post('/flachecards', (req, res) => {
//     req.body.question
//     decks.push(req.body)
//     res.send(decks)
// })

app.listen(SERVER_PORT, () => console.log('server running on port ' + SERVER_PORT))