const express = require("express");
const app = express();

// to be able to use POST data, must include following 2 lines
// .json and .urlencoded are Express middleware functions. they provide & parse request.body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser.");
});

// how to get POST data from a form:
app.post("/api/users/new", (req, res) => {
  console.log(req.body);
  // req.body -- holds any form data sent from React ex. new user registration...
  const newUser = req.body;
  // then return new user after creation
  return res.status(201).json({ newUser: newUser });
});
// NEIL'S DEMO:
// app.post("/api/cities", (req, res) => {
//   res.json({
//     status: "success",
//     city: req.body
//   });
// });

// passing data through url params -- must be prepended with a ':' -- "/api/users/:routingParam"

// updating data uses PUT request:
app.put("/api/users/update/:id", (req, res) => {
  // update user based on id that was passed in url
  console.log(req.params.id);
  console.log(req.body);
});

// deleting data:
app.delete("/api/users/delete/:id", (req, res) => {
  console.log(req.params.id);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
// alternative:
// const port = 8000; -->goes at the top of the file
// app.listen(port, ()=>console.log(`Listening on port ${port}`));
