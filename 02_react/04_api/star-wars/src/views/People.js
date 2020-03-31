import React, { useEffect, useState } from "react";
import axios from "axios";

const People = ({ id }) => {
  const [displayState, setDisplayState] = useState({});

  const [error, setError] = useState("");

  const apiInfo = "https://swapi.co/api/people/" + id;
  console.log("apiInfo: ", apiInfo);

  useEffect(() => {
    axios
      .get(apiInfo)
      .then(response => {
        setDisplayState(response.data);
      })
      .catch(err => {
        setError("These are not the droids you're looking for.");
      });
  }, [apiInfo]);

  console.log("people displayState: ", displayState);

  return (
    <>
      {error.length > 0 ? (
        <>
          <h1>{error}</h1>
          <img
            className="obi-wan"
            src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864"
            alt="Obi-Wan Kenobi"
          />
        </>
      ) : (
        <>
          <h1> {displayState.name}</h1>
          <h5>Height: {displayState.height}</h5>
          <h5>Hair Color: {displayState.hair_color}</h5>
          <h5>Eye Color: {displayState.eye_color}</h5>
          <h5>Skin Color: {displayState.skin_color}</h5>
          <h5>Home World: </h5>
        </>
      )}
    </>
  );
};

export default People;
