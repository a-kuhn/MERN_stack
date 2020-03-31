const Author = require("../models/author.model");

module.exports = {
  // create
  create(req, res) {
    Author.create(req.body)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  },
  // getAll
  getAll(req, res) {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  // getOne
  getOne(req, res) {
    Author.findById(req.params.id)
      .then(author => res.json(author))
      .catch(err => res.json(err));
  },
  // delete
  delete(req, res) {
    Author.findByIdAndDelete(req.params.id)
      .then(deletedAuthor => res.json(deletedAuthor))
      .catch(err => res.json(err));
  },
  // update
  update(req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedAuthor => res.json(updatedAuthor))
      .catch(err => res.status(400).json(err));
  }
};
