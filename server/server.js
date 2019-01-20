require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");

const controller = require("./controller");
const { decks } = require("./decks");
const { CONNECTION_STRING, SERVER_PORT, DEVING } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  })
);

// app.use((req, res) => {
//   const { user_id } = req.session;
//   if (user_id) {
//     next();
//   } else {
//     res.status(401).send("Please log in.");
//   }
// });

app.use(express.json());

app.post("/auth/signup", controller.signup);

app.get("/profile", (req, res) => {
  const { user_id } = req.session;
  if (user_id) {
    res.status(200).send(user_id);
  }
});

app.get("/flachecards", (req, res) => {
  res.status(200).send(decks);
});

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

app.listen(SERVER_PORT, () =>
  console.log("server running on port " + SERVER_PORT)
);
