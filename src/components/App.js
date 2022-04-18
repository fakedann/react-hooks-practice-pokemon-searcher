import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect( () => {
    fetch(`http://localhost:3001/pokemon`)
    .then( data => data.json())
    .then( pokemon => setPokemon(pokemon))

    // fetch(`http://localhost:3001/pokemon/${151}`, {
    //   method: "DELETE"
    // })

  }, [])
  

  function postPokemon(poke){
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(poke)
    })
    .then( data => data.json())
    .then( data => {
      console.log(data)
      setPokemon([...pokemon, data])
    })
  }
  console.log(pokemon)

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} postPokemon={postPokemon}/>
    </div>
  );
}

export default App;
