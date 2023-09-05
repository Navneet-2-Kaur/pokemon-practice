import React from "react";

const PokemonEntry = ({ pokeName}) => {
    return (
        <fieldset>
            <div>
                <p>Pokemon Name: {pokeName}</p>
            </div>
        </fieldset>
    );
};

export default PokemonEntry;