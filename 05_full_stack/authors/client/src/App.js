import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// libraries
import axios from "axios";
import { Router, Redirect } from "@reach/router";

//views & components
import Authors from "./views/Authors";
import NewAuthor from "./views/NewAuthor";
import UpdateAuthor from "./views/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Redirect from="/" to="/authors" />
        <Authors path="/authors" />
        <NewAuthor path="/authors/new" />
        <UpdateAuthor path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
