const jokeController = require("../controllers/joke.controller");

module.exports = app => {
  //get all jokes
  app.get("/api/jokes", jokeController.getAll);
  //get a single joke
  app.get("/api/jokes/:id", jokeController.getOne);
  //create a joke
  app.post("/api/jokes", jokeController.create);
  //update a joke
  app.put("/api/jokes/:id", jokeController.update);
  //delete a joke
  app.delete("/api/jokes/:id", jokeController.delete);
};
