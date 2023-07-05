// Import dependencies
const express = require("express");
const Animals = require("../models/animals");

// Router
const router = express.Router();

// INDEX - GET - list all animals - /animal
router.get("/", async (req, res) => {
    const animals = await Animals.find({});
    res.render("animals/index.ejs", {animals})
});

// NEW - GET - show form to create an animal - /animal/new
router.get("/new", (req, res) => {
    res.render("animals/new.ejs");
});

// DESTROY - DELETE - delete an animal - /animal/:id 
router.delete("/:id", (req, res) => {
    const id = req.params.id
    animals.splice(id, 1)
    res.redirect("/animal");
})

// UPDATE - PUT - update an animal - /animal/:id
router.put("/id:", (req, res) => {
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true : false
    animals[id] = req.body
    res.redirect("/animal");
})

// CREATE - POST - create an animal - /animal
router.post("/", (req, res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false
    animals.push(req.body)
    res.redirect("/animal");
})

// EDIT - GET - render form to update an animal - /:id/edit
router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    const animal = animals[id]
    res.render("animals/edit.ejs", {animal, id})
})

// SHOW - GET - shows one animal - /animal/:id
router.get("/:id", (req, res) => {
    const id = req.params.id
    const animal = animals[id]
    res.render("animals/show.ejs", {animal, id})
})


// EXPORT ROUTER
module.exports = router;
