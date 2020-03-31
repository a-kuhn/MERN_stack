import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchForm from "./components/SearchForm";
import People from "./views/People";
import Planets from "./views/Planets";

function App() {
  return (
    <div className="container-flex">
      <SearchForm className="d-block" />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
