import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

//page to display update author form
export default ({ id }) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then(res => {
        const author = res.data;
        setName(author.name);
      })
      .catch(console.log);
  }, [id]);

  const onSubmitHandler = e => {
    e.preventDefault();
    const updatedName = {
      name
    };
    axios
      .put("http://localhost:8000/api/authors/" + id, updatedName)
      .then(res => navigate("/authors"))
      .catch(err => {
        console.log("err.response.data.errors: ", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Link to="/authors" className="link">
        Home
      </Link>
      <p className="purple-font">Edit this author: </p>
      <form
        onSubmit={onSubmitHandler}
        id="AuthorForm"
        className="authorForm py-3 px-3"
      >
        <div className="formGroup">
          <label>Name:</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-control"
          ></input>
          {errors.name !== undefined ? (
            <span className="error">{errors.name.message}</span>
          ) : (
            ""
          )}
        </div>
        <Link to="/authors" className="form-button py-1 px-3 m-1">
          Cancel
        </Link>
        <button className="form-button my-3">Submit</button>
      </form>
    </div>
  );
};
