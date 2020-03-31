import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = props => {
  const [pokemonList, setPokemonList] = useState([]);

  const onSubmitHandler = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        setPokemonList(response.data.results.map(p => p.name));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="m-top">
      <button className="fetch-btn" onClick={onSubmitHandler}>
        Get Pokemon
      </button>
      <ul>
        {pokemonList.map((pokemon, i) => (
          <li key={i}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
