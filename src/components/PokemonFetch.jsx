import React from "react";
import { useState } from "react";
import PokemonEntry from "./PokemonEntry";





const PokemonFetch = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonFetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        // not the actual JSON response body but the entire HTTP response
        return response.json();
      })
      .then((jsonRes) => {
        // we now run another promise to parse the HTTP response into usable JSON
        console.log(jsonRes.results);
        setPokemonList(jsonRes.results);
      })
      .catch((err) => {
        console.log(err);
      });
    }
      return (
        <fieldset>
          
          <button  style={{backgroundColor:"grey", color:"white", fontSize:"20px"}} onClick={ getPokemonFetch } >Fetch Pokemon </button>

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
          
          ): <p>Click the button to get pokemon</p>
        }

        </div>

        </fieldset>
      );
      
    };
  
export default PokemonFetch;
  
