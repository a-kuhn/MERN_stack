const playerController = require("../controllers/player.controller");

module.exports = app => {
  // create
  app.post("/api/players", playerController.create);
  // getAll
  app.get("/api/players", playerController.getAll);
  // getOne
  app.get("/api/players/:id", playerController.getOne);
  // delete
  app.delete("/api/players/:id", playerController.delete);
  // update
  app.put("/api/players/:id", playerController.update);
};
