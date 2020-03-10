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

 const filterPokemon = (text) => {
  let filter, root, div;
  
  filter = text.toUpperCase();
  root = document.getElementById("pokedexRoot");
  div = root.getElementsByTagName('div');

  for (let i = 0; i < div.length; i++) {

    let pokeName = div[i].getElementsByTagName("h2")[0];
    const txtValue = pokeName.textContent || pokeName.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
 }

  return (
    <div className="pokedex_page">
      <div className="pokedex_title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar onSearch={filterPokemon} />
      <div id="pokedexRoot" className="pokedex_container">
         {pokemons.map(pokemon => <PokemonCard pokemon = {pokemon} />)}
      </div>
    </div>
  )
};

export default Pokedex;
