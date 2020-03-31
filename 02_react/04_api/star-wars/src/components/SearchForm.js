import React, { useState } from "react";
import { navigate } from "@reach/router";

const SearchForm = () => {
  const [inputState, setInputState] = useState({ resource: "", id: "" });

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log("onSubmitHandler data: ", inputState);
    if (inputState.resource === "Planets") {
      navigate("/planets/" + inputState.id);
    } else {
      navigate("/people/" + inputState.id);
    }
  };

  return (
    <div className="form-inline mt-5">
      <form className="form-group" onSubmit={onSubmitHandler}>
        <label>Search for: </label>
        <select
          name="resource"
          value={inputState.resource}
          className="form-control mx-2"
          onChange={e => {
            setInputState({
              ...inputState,
              [e.target.name]: e.target.value
            });
          }}
        >
          <option>Choose a resource</option>
          <option>People</option>
          <option>Planets</option>
        </select>
        <label className="ml-5">ID: </label>
        <input
          type="text"
          name="id"
          value={inputState.id}
          className="form-control mx-2 col-md-1"
          onChange={e => {
            setInputState({
              ...inputState,
              [e.target.name]: e.target.value
            });
            console.log("inputState: ", inputState);
          }}
        ></input>
        <button className="btn btn-primary px-4">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
