// IMPORT DEPENDENCIES & SETUP

require("dotenv").config(); //to be able to use dotenv package
const express = require("express"); //importing the express lib
const morgan = require("morgan"); //importing the morgan lib
const PORT = process.env.PORT; //getting the PORT from .env
const app = express(); //express application object
const methodOverride = require("method-override"); //importing method-override for PUTS and DELETES
const animalsRouter = require("./controllers/animals");


// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static("public")); //to treat public folder as static file server
app.use(express.urlencoded({extended: false})); //for parsing urlencoded
app.use(methodOverride("_method")); //to override method when it sees "?_method="
app.use("animal", animalsRouter); //use the router for any url that starts with /animals


// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
});
