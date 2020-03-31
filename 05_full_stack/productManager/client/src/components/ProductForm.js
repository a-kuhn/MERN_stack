import React, { useState } from "react";
import axios from "axios";

const ProductForm = props => {
  const { initialTitle, initialPrice, initialDesc, onSubmitProp } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [desc, setDesc] = useState(initialDesc);

  const onSubmitHandler = e => {
    e.preventDefault();
    //use submitProp function to add/update data to db
    onSubmitProp({ title, price, desc });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div id="title-input">
          <label>Title</label>
          <input
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div id="price-input">
          <label>Price</label>
          <input
            value={price}
            type="number"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div id="desc-input">
          <label>Description</label>
          <input
            value={desc}
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button method="post">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
