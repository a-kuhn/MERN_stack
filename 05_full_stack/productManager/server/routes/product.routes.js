const productController = require("../controllers/product.controller");

module.exports = app => {
  //get all
  app.get("/api/products", productController.getAll);
  //get one
  app.get("/api/products/:id", productController.getOne);
  //create
  app.post("/api/products", productController.create);
  //update
  app.put("/api/products/:id", productController.update);
  //delete
  app.delete("/api/products/:id", productController.delete);
};
