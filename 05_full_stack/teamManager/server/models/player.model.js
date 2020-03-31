const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredMsg],
      minlength: [2, "*Name must be at least {MINLENGTH} characters in length."]
    },
    preferredPosition: "",
    status: {
      game1: "",
      game2: "",
      game3: ""
    }
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
