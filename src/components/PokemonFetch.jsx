import React from "react";
import { useState } from "react";
import PokemonEntry from "./PokemonEntry";
import axios from "axios";

const PokemonFetch = () => {
  const [pokemonList, setPokemonList] = useState([]);
  
  const getPokemonAxios = () => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(res => {
      // console.log(res.results);
      setPokemonList(res.data.results);
    })
    .catch((err) => console.log(err));
  }
    
    return (
      <fieldset>
      <button onClick={getPokemonAxios} >Axios Pokemon Data</button>
      <div>
        {
          pokemonList ? 
          pokemonList.map( pokemon => {
            return (
              <PokemonEntry
              pokeName={pokemon.name}
              />
              )
            }
            ): <></>
            }
      </div>
  </fieldset>

);
};

export default PokemonFetch;
  
