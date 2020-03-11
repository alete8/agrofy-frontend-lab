import React from 'react';
import './PokemonCard.css';
import Button from '../Button/Button';

const PokemonCard = (props) => {

    const getLocalStorageFavs = () => {
        if (localStorage.getItem('myFavs')) {
          return JSON.parse(localStorage.getItem('myFavs'));
        }
        else {
          let myFavs = [];
          return localStorage.setItem('myFavs', JSON.stringify(myFavs));;
        }
    }

    const getButtonClass = (id) => {
        let favs = getLocalStorageFavs();
      
        if (pokemonAddedToFavs(id, favs)) {
          return 'btn-secondary';  
        }
        return 'btn-primary';
    }

    function getButtonText(id) {
        let favs = getLocalStorageFavs();
      
        if (pokemonAddedToFavs(id, favs)) {
          return 'Remove';
        } 
        return 'Add to favs';
    }

    function addRemoveFavs(id) {
        let favs = getLocalStorageFavs();
        let btn = document.getElementById(`btn-${id}`);
      
        if (pokemonAddedToFavs(id, favs)) { 
          btn.textContent = 'Add to favs';
          favs.splice(favs.indexOf(id), 1);
          btn.setAttribute('class', 'btn-primary');
        } else {
          btn.textContent = 'Remove';
          favs.push(id);
          btn.setAttribute('class', 'btn-secondary');
        }

        localStorage.setItem('myFavs', JSON.stringify(favs));
    }

    const pokemonAddedToFavs = (id, favs) => {
        return favs.indexOf(id) !== -1;
    }

    const noPropsPrevent = () => {
        if (props.pokemon){
            return <React.Fragment>
                <img
                    className="card_img"
                    src={props.pokemon.image}
                    alt="">
                </img>
                <h2
                    className="card_h2">
                   {props.pokemon.name}
                </h2>
                <label
                    className="card_label">
                    Type: {props.pokemon.type}
                </label>
                <Button 
                    id={props.pokemon.id}
                    className={getButtonClass(props.pokemon.id)}
                    label={getButtonText(props.pokemon.id)}
                    callback={() => addRemoveFavs(props.pokemon.id)}>  
                </Button>
            </React.Fragment>
        } else {
            return <React.Fragment>
            </React.Fragment>
        }
    }

    return (
        <div id={props.pokemon.id} className="card">
            {noPropsPrevent()}
        </div>
    ); 
} 

export default PokemonCard;