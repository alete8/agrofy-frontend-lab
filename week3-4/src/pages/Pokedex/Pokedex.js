import React, { useState, useEffect } from 'react';
import './Pokedex.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAllPokemons, buildPokemon } from '../../services/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
    
  useEffect(() => {
    getAllPokemons()
    .then(response =>
      buildArray(response))
  }, []);

 const buildArray = (pokemonsResponse) => {
  let array = [];
  for (let i=0; i<150; i++) {
    array.push(buildPokemon(pokemonsResponse[i].data));
  }
  
  setPokemons(array);
 }

  return (
    <div className="pokedex_page">
      <div className="pokedex_title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar />
      <div className="pokedex_container">
         {pokemons.map(pokemon => <PokemonCard pokemon = {pokemon} />)}
      </div>
    </div>
  )
};

export default Pokedex;
