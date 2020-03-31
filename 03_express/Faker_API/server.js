const port = 8000;

const express = require("express");
const faker = require("faker");

const app = express();

class User {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    };
  }
}

// new user
app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  console.log("new User: ", newUser);
  res.json({ newUser: newUser });
});

//new company
app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();
  console.log("new Company: ", newCompany);
  res.json({ newCompany: newCompany });
});

//new user and new company
app.get("/api/user/company", (req, res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({
    newUser: newUser,
    newCompany: newCompany
  });
});

//keeps server listening for requests at PORT 8000 (or whatever I specify)
const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);
