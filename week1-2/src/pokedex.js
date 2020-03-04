window.onload = function() {
  fetchPokemons();
};

const fetchPokemons = () => {
  let urls = [];

  for (var i = 1; i<=150; i++) { 
    urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }

  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => response.json())
        .catch(err => console.error(err))
    )
  ).then(pokemons =>
   pokemons.forEach(pokemon =>   
   drawPokemon(pokemon)));
}

function drawPokemon(pokemon) {
  
  const app = document.getElementById('root');

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;

  const h2 = document.createElement('h2');
  h2.textContent = pokemon.name;

  const label = document.createElement('label');
  let types = '';
  
  pokemon.types.forEach(pokemontype =>
  types = buildType(pokemontype, types));

  label.textContent = "Type: " + types;

  const button = document.createElement('button');
  button.textContent = "Add to favs";
      
  app.appendChild(card);
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(label);
  card.appendChild(button);
}

function buildType(pokemontype, types) {
  if (!types) {
    types = pokemontype.type.name;
  } else {
    types = types + ', ' + pokemontype.type.name;
  }

  return types;
}