const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");

module.exports = router;

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebrityList => {
    console.log(celebrityList);
    res.render("celebrities", {celebrityList}) // res.render("celebrities.hbs")
  })
  .catch(err => {
    console.error(err);
  })
});

router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render("show", {celebrity});
  })
  .catch(error => console.log(error));
})

router.get("/new", (req, res) => {
  res.render("new")
})

router.post("/new", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(newCeleb => {
    console.log("added:", newCeleb);
    res.redirect("/celebrities")
  })
  .catch(error => {
    console.log(error);
    res.render("new")
  })
})

router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(deletedCeleb => {
    console.log("deleted:", deletedCeleb);
    res.redirect("/celebrities")
  })
  .catch(err => {
    console.log(err);
  })
})

router.get("/celebrities/:id/edit", (req, res) => {
  Celebrity.findById(req.params.id)
  .then(celebToEdit => {
    res.render("edit", {celebToEdit})
    console.log("to edit:", celebToEdit)
  })
  .catch(err => console.error(err))
})

router.post("/celebrities/:id/", (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
  .then(updatedCeleb => {
    console.log("updated:", updatedCeleb);
    res.redirect("/celebrities")
  })
  .catch(error => {
    console.error(error);
  })
})