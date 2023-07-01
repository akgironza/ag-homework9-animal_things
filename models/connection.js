require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// Confirm connection is working
mongoose.connection
    .on('open', () => console.log("Mongoose connected"))
    .on('close', () => console.log('mongoose disconnected'))
    .on('error', () => console.log('mongoose error'));


// Exporting mongoose configured package
module.exports = mongoose;