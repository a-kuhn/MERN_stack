const Joke = require("../models/joke.model");

module.exports = {
  //get all jokes
  create(req, res) {
    Joke.create(req.body)
      .then(joke => res.json(joke))
      .catch(err => res.json(err));
  },
  //get a single joke
  getAll(req, res) {
    Joke.find()
      .then(jokes => res.json(jokes))
      .catch(err => res.json(err));
  },
  //create a joke
  getOne(req, res) {
    Joke.findById(req.params.id)
      .then(joke => res.json(joke))
      .catch(err => res.json(err));
  },
  //update a joke
  update(req, res) {
    Joke.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedJoke => res.json(updatedJoke))
      .catch(err => res.json(err));
  },
  //delete a joke
  delete(req, res) {
    Joke.findByIdAndDelete(req.params.id)
      .then(deletedJoke => res.json(deletedJoke))
      .catch(err => res.json(err));
  }
};
