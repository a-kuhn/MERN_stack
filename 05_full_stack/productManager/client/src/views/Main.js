import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data);
        console.log("res.data: ", res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId));
  };

  const createProduct = product => {
    axios.post("http://localhost:8000/api/products", product).then(res => {
      setProducts([...products, res.data]);
    });
  };

  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle={""}
        initialPrice={""}
        initialDesc={""}
      />
      <ProductList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};
