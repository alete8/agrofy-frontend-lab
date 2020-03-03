for (i = 1; i <= 150; i++) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + i)  
    .then((response) => {
      return response.json();  
    })  
    .then((pokemon) => {
      const app = document.getElementById('root')

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const img = document.createElement('img')
      img.src = pokemon.sprites.front_default

      const h2 = document.createElement('h2')
      h2.textContent = pokemon.name

      const label = document.createElement('label')
      label.textContent = "Type: " + pokemon.types.values

      const button = document.createElement('button')
      button.textContent = "Add to favs"
      
      app.appendChild(card)
      card.appendChild(img)
      card.appendChild(h2)
      card.appendChild(label)
      card.appendChild(button)

      console.log(pokemon)
    })  
    .catch(error => console.error(error))
}