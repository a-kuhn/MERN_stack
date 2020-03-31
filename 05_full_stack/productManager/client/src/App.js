import React from "react";
import "./App.css";
import { Router, Redirect } from "@reach/router";

import Main from "./views/Main";
import Product from "./views/Product";
import Navbar from "./components/Navbar";
import UpdateProduct from "./views/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        <Main path="products/" />
        <Product path="products/:id" />
        <UpdateProduct path="products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
