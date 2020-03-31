import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import ProductForm from "../components/ProductForm";

export default props => {
  const { id } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then(res => {
        const product = res.data;
        setTitle(product.title);
        setPrice(product.price);
        setDesc(product.desc);
      })
      .then(
        console.log(
          "get request on update product: ",
          res.data,
          "\nproduct: ",
          product
        )
      )
      .catch(console.log);
  }, [id]);

  const updateProduct = e => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      desc
    };

    axios
      .put("http://localhost:8000/api/products/" + id, updatedProduct)
      .then(res => navigate("/products/" + id))
      .catch(err => {
        // extract error messages out of the errors object and put them into an array
        const errorsObj = err.response.data.errors;
        const errorMessages = [];
        for (const key in errorsObj) {
          errorMessages.push(errorsObj[key].message);
        }
        setErrors(errorMessages);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <div>
        {errors.map(msg => (
          <p className="error">{msg}</p>
        ))}
      </div>
      <ProductForm
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDesc={product.desc}
      />
    </div>
  );
};
