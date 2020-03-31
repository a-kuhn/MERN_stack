import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default props => {
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");

  const [errors, setErrors] = useState({});

  const addPlayer = e => {
    e.preventDefault();
    const newPlayer = {
      name,
      preferredPosition,
      status: {
        game1: "undecided",
        game2: "undecided",
        game3: "undecided"
      }
    };
    axios
      .post("http://localhost:8000/api/players", newPlayer)
      .then(res => {
        console.log("new player res: ", res);
        navigate("/players/list");
      })
      .catch(err => {
        console.log("new player errors: ", err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="addPlayer m-4 py-2 px-4">
      <h4>Add Player</h4>
      <form className="form" onSubmit={addPlayer}>
        <div className="form-group row">
          <label>Player Name: </label>
          <input value={name} onChange={e => setName(e.target.value)} />
          {errors.name !== undefined ? (
            <span className="error">{errors.name.message}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group row">
          <label>Preferred Position: </label>
          <input
            value={preferredPosition}
            onChange={e => setPreferredPosition(e.target.value)}
          />
        </div>
        <button className="addButton" disabled={name.length < 2}>
          Add
        </button>
      </form>
    </div>
  );
};
