// Import dependencies
const express = require("express");
const Animals = require("../models/animals");

// Router
const router = express.Router();

// INDEX - GET - list all animals - /animal

// NEW - GET - show form to create an animal - /animal/new

// DESTROY - DELETE - delete an animal - /animal/:id 

// UPDATE - PUT - update an animal - /animal/:id

// CREATE - POST - create an animal - /animal

// EDIT - GET - render form to update an animal - /:id/edit

// SHOW - GET - shows one animal - /animal/:id



// EXPORT ROUTER
module.exports = router;
