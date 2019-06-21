const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity");

const celebrities = [
  {
    name: "Magneto",
    occupation: "Terrorist",
    catchPhrase: "Peace was never an option."
  },
  {
    name: "Charles Xavier",
    occupation: "Professor",
    catchPhrase: "Just because someone stumbles and loses their way, doesn't mean they're lost forever."
  },
  {
    name: "Wolverine",
    occupation: "Canadian",
    catchPhrase: "Go f*** yourselves."
  }
];

module.exports = celebrities;

Celebrity.create(celebrities)
.then (dbResponse => {
  console.log("celebrity added:", dbResponse);
})
.catch (err => {
  console.log(err);
});

