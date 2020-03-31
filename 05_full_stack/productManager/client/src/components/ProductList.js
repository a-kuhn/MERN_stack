import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

export default props => {
  console.log("product list props: ", props);

  const { removeFromDom } = props;
  const deleteProduct = productId => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then(res => {
        removeFromDom(productId);
      });
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map(product => {
              return (
                <tr key={product._id}>
                  <td>
                    <Link to={"/products/" + product._id}>{product.title}</Link>
                  </td>
                  <td>
                    <button
                      onClick={e => navigate(`/products/${product._id}/edit`)}
                    >
                      Edit
                    </button>
                    {"  |  "}
                    <button
                      onClick={e => {
                        deleteProduct(product._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
