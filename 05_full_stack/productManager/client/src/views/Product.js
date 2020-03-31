import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Product = ({ id }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then(res => setProduct(res.data))
      .catch(console.log);
  }, [id]);

  if (product === null) {
    return "Loading...";
  }

  // const { removeFromDom } = id;
  const deleteProduct = productId => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)

      .then(res => navigate("/products"));
  };

  return (
    <div>
      <h4>{product.title}</h4>
      <h6>Price: {product.price}</h6>
      <h6>Description: {product.desc}</h6>
      <button
        onClick={e => {
          deleteProduct(product._id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Product;
