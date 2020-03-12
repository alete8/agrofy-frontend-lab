import axios from 'axios';

export let getAllPokemons = () => {
  let urls = [];

  for (var i = 1; i <= 150; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }

  return Promise.all(urls.map(fetchData));
}

export const getPokemonsById = (ids) => {
  let urls = [];

  ids.forEach(id =>  urls.push(`https://pokeapi.co/api/v2/pokemon/${id}`));

  return Promise.all(urls.map(fetchData));
}

export let buildPokemon = (pokemonData) => {
  let types = '';

  pokemonData.types.forEach(pokemontype =>
    types = buildType(pokemontype, types));

  const pokemon = {
    name: pokemonData.name,
    id: pokemonData.id,
    image: pokemonData.sprites.front_default,
    type: types
  };

  return pokemon;
}

let buildType = (pokemontype, types) => {
  if (!types) {
    types = pokemontype.type.name;
  } else {
    types = types + ', ' + pokemontype.type.name;
  }
  return types;
}

let fetchData = (url) => {
    return axios
      .get(url)
      .then(function(response) {
        return {
          success: true,
          data: response.data
        };
      })
      .catch(function(error) {
        return { success: false };
      });
}