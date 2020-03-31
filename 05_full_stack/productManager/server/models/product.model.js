const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, requiredMsg],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
  price: {
    type: Number,
    required: [true, requiredMsg],
    min: [0.01, "{PATH} must cost at least ${MIN}"]
  },
  desc: {
    type: String,
    required: [true, requiredMsg],
    minlength: [10, "{PATH} must be at least {MINLENGTH} characters."]
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
