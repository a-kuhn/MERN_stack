import React from "react";
import "./App.css";

import { Redirect, Router } from "@reach/router";

import Home from "./views/Home";
import Value from "./views/Value";
import StyledWord from "./views/StyledWord";

function App() {
  return (
    <div className="container-flex">
      <Router>
        <Home path="/" />
        <Value path="/:value" />
        <StyledWord path="/:value/:bgColor/:color" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
