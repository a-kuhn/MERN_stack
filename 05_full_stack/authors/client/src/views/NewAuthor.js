import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

//page to display create author form
export default props => {
  const [name, setName] = useState([]);

  const [errors, setErrors] = useState({});

  const onSubmitHandler = e => {
    e.preventDefault();

    const newAuthor = {
      name
    };

    axios
      .post("http://localhost:8000/api/authors", newAuthor)
      .then(res => {
        console.log("new author res: ", res);
        navigate("/authors");
      })
      .catch(err => {
        console.log("new author error: ", err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Link to="/authors" className="link">
        Home
      </Link>
      <p className="purple-font">Add a new author: </p>
      <form onSubmit={onSubmitHandler} id="AuthorForm">
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        {errors.name !== undefined ? (
          <span className="error">{errors.name.message}</span>
        ) : (
          ""
        )}
        <Link to="/authors" className="form-button py-1 px-3 m-1">
          Cancel
        </Link>
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};
