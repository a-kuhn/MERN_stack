const authorController = require("../controllers/author.controller");

module.exports = app => {
  // create
  app.post("/api/authors", authorController.create);
  // getAll
  app.get("/api/authors", authorController.getAll);
  // getOne
  app.get("/api/authors/:id", authorController.getOne);
  // delete
  app.delete("/api/authors/:id", authorController.delete);
  // update
  app.put("/api/authors/:id", authorController.update);
};
