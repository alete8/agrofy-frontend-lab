import React, { useState, useEffect } from 'react';
import './MyFavs.css';
import { getAllPokemons, buildPokemon } from '../../services/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const MyFavs = () => {
    const [pokemons, setPokemons] = useState([]);
    

    useEffect(() => {
      getAllPokemons()
      .then(response =>
        buildFavArray(response))
    }, [pokemons]);

    const getLocalStorageFavs = () => {
          return JSON.parse(localStorage.getItem('myFavs'));
    }
  
    const buildFavArray = (pokemonsResponse) => {
        let favsAarray = [];
        let myfavs = getLocalStorageFavs();
            for (let i=0; i<150; i++) {
                if (myfavs[i] === pokemonsResponse[i].data.id) {
                    favsAarray.push(buildPokemon(pokemonsResponse[i].data));
                }
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