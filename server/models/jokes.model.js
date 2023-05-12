const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minLength: [10, "Setup must be at least 2 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minLength: [3, "Punchline must be at least 2 characters long"]
    }
}, {timestamps : true})

const Joke = mongoose.model('Joke', JokesSchema);
module.exports = Joke;