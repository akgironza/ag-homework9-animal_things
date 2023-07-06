// Import dependencies
const express = require("express")
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
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    await Animals.findByIdAndDelete(id)
    res.redirect("/animal");
})

// UPDATE - PUT - update an animal - /animal/:id
// my PUT route is giving me issues - i've been working on fixing it but might need to look at it with new eyes...
// will revisit 
router.put("/id:", async (req, res) => {
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true : false
    await Animals.findByIdAndUpdate(id, req.body)
    res.redirect("/animal");
})

// CREATE - POST - create an animal - /animal
router.post("/", async (req, res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false
    await Animals.create(req.body)
    res.redirect("/animal");
})

// EDIT - GET - render form to update an animal - /:id/edit
router.get("/:id/edit", async (req, res) => {
    const id = req.params.id
    const animal = await Animals.findById(id)
    res.render("animals/edit.ejs", {animal, id})
})

// SHOW - GET - shows one animal - /animal/:id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const animal = await Animals.findById(id)
    res.render("animals/show.ejs", {animal, id})
})


// EXPORT ROUTER
module.exports = router
