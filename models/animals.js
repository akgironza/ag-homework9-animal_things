// ANIMAL MODEL

// Importing connection file with configured mongoose package
const mongoose = require("./connection");

// Setting variable that holds schema
const animalSchema = mongoose.Schema({
    species: String,
    extinct: Boolean, 
    location: String,
    lifeExpectancy: Number
});

// Creating model to be passed into db
const Animals = mongoose.model('animal', animalSchema);

// Exporting model
module.exports = Animals;