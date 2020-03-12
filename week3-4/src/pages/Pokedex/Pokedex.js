import React, { useState, useEffect } from 'react';
import './Pokedex.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAllPokemons, buildPokemon } from '../../services/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filtereds, setFiltereds] = useState([]);


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
      setFiltereds(array);
  }

 const filterPokemon = (text) => {
   let pokemonsFiltered = pokemons.filter(pok => 
    pok.name.toLowerCase().includes(text.toLowerCase()));

    setFiltereds(pokemonsFiltered);
 } 

  return (
    <div className="pokedex_page">
      <div className="pokedex_title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar onSearch={filterPokemon} />
      <div id="pokedexRoot" className="pokedex_container">
         {filtereds.map(pokemon => <PokemonCard pokemon = {pokemon} />)}
      </div>
    </div>
  )
};

export default Pokedex;
