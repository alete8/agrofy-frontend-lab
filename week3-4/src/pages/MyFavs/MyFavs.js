import React, { useState, useEffect } from 'react';
import './MyFavs.css';
import { getAllPokemons, buildPokemon, getPokemonsById } from '../../services/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const MyFavs = () => {
    const [pokemons, setPokemons] = useState([]);
    

    useEffect(() => {
        getPokemonsById(getLocalStorageFavs())
        .then(response =>
            buildFavArray(response))
    }, [pokemons]);

    const getLocalStorageFavs = () => {
          return JSON.parse(localStorage.getItem('myFavs'));
    }
  
    const buildFavArray = (pokemonsResponse) => {
        let favsAarray = [];

        for (let i=0; i<pokemonsResponse.length; i++) {
            favsAarray.push(buildPokemon(pokemonsResponse[i].data));
        }
        
        setPokemons(favsAarray);
    }
    
    return (
        <div className="myfavs_page">
            <div className="myfavs_title">
                <h1>MyFavs</h1>
            </div>
            <div id="pokedexRoot" className="myfavs_container">
                {pokemons.map(pokemon => <PokemonCard pokemon = {pokemon} />)}
            </div>
        </div>
    )
}

export default MyFavs;