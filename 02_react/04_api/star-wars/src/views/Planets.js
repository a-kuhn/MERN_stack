import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = ({ id }) => {
  const [displayState, setDisplayState] = useState({});

  const [error, setError] = useState("");

  const apiInfo = "https://swapi.co/api/planets/" + id;
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

  console.log("ID: ", id, "\nplanets displayState: ", displayState);

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
          <h1>{displayState.name}</h1>
          <h5>Climate: {displayState.climate}</h5>
          <h5>Terrain: {displayState.terrain}</h5>
          <h5>Surface Water: {displayState.surfaceWater}</h5>
          <h5>Population: {displayState.population}</h5>
        </>
      )}
    </>
  );
};

export default Planets;
