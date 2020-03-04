const REMOVE_TEXT = 'Remove';
const ADD_TO_FAV_TEXT = 'Add to favs';
const BTN_REMOVE_CLASS = 'btn-secondary';
const BTN_ADD_CLASS = 'btn-primary';


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
   drawAndStorePokemon(buildPokemon(pokemon))));
}

function drawAndStorePokemon(pokemon) {
  // Creo array de pokemons para luego guardarlo en el localstorage
  let pokemonArray = [];
  pokemonArray.push(pokemon);
  localStorage.setItem('pokemonsArray', JSON.stringify(pokemonArray));

  const app = document.getElementById('root');

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const img = document.createElement('img');
  img.src = pokemon.image;

  const h2 = document.createElement('h2');
  h2.textContent = pokemon.name;

  const label = document.createElement('label');
  label.textContent = "Type: " + pokemon.type;

  const button = document.createElement('button');
  button.id = `pokebutton-${pokemon.id}`;
  const btnClass = getButtonClass(pokemon.id);
  button.setAttribute('onclick', `addRemoveFavs(${pokemon.id})`);
  button.setAttribute('class', btnClass);
  button.textContent = getButtonText(pokemon.id);
      
  app.appendChild(card);
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(label);
  card.appendChild(button);
}

function buildPokemon(pokemonData) {
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

function buildType(pokemontype, types) {
  if (!types) {
    types = pokemontype.type.name;
  } else {
    types = types + ', ' + pokemontype.type.name;
  }
return types;
}

function addRemoveFavs(id) {
  let favs = getLocalStorageFavs();
  let btn = document.getElementById(`pokebutton-${id}`);

  if (pokemonAddedToFavs(id, favs)) { 
    btn.textContent = ADD_TO_FAV_TEXT;
    favs.splice(favs.indexOf(id), 1);
    btn.setAttribute('class', BTN_ADD_CLASS);
  } else {
    btn.textContent = REMOVE_TEXT;
    favs.push(id);
    btn.setAttribute('class', BTN_REMOVE_CLASS);
  }
  
  localStorage.setItem('myFavs', JSON.stringify(favs));
}

function getButtonClass(id) {
  let favs = getLocalStorageFavs();

  if (pokemonAddedToFavs(id, favs)) {
    return BTN_REMOVE_CLASS;  
  }
  return BTN_ADD_CLASS;
}

function getButtonText(id) {
  let favs = getLocalStorageFavs();

  if (pokemonAddedToFavs(id, favs)) {
    return REMOVE_TEXT;
  } 
  return ADD_TO_FAV_TEXT;
}

function pokemonAddedToFavs(id, favs) {
  return favs.indexOf(id) !== -1;
}

function getLocalStorageFavs() {
  return JSON.parse(localStorage.getItem('myFavs'));
}

function search() {
  let input, filter, root, div;
  input = document.getElementById('search-bar');

  filter = input.value.toUpperCase();

  root = document.getElementById("root");
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