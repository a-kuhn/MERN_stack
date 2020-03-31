const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, requiredMsg],
      minlength: [10, "{PATH} must be at least {MINLENGTH} characters."]
    },
    punchline: {
      type: String,
      required: [true, requiredMsg],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
    }
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
