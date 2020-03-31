const Player = require("../models/player.model");

module.exports = {
  // create
  create(req, res) {
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },
  // getAll
  getAll(req, res) {
    Player.find()
      .then(players => res.json(players))
      .catch(err => res.json(err));
  },
  // getOne
  getOne(req, res) {
    Player.findById(req.params.id)
      .then(player => res.json(player))
      .catch(err => res.json(err));
  },
  // delete
  delete(req, res) {
    Player.findByIdAndDelete(req.params.id)
      .then(deletedPlayer => res.json(deletedPlayer))
      .catch(err => res.json(err));
  },
  // update
  update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedPlayer => res.json(updatedPlayer))
      .catch(err => res.status(400).json(err));
  }
};
