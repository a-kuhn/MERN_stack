const Product = require("../models/product.model");

module.exports = {
  //get one
  getAll(req, res) {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err));
  },
  //get all
  getOne(req, res) {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json(err));
  },
  //create
  create(req, res) {
    Product.create(req.body)
      .then(product => res.json(product))
      .catch(err => res.status(400).json(err));
  },
  //update
  update(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.status(400).json(err));
  },
  //delete
  delete(req, res) {
    console.log("deleting prod. id: ", req.params.id);
    Product.findByIdAndDelete(req.params.id)
      .then(deletedProduct => req.json(deletedProduct))
      .catch(err => res.json(err));
  }
};
