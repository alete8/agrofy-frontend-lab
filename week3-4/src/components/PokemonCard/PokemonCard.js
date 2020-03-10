import React from 'react';
import './PokemonCard.css';
import Button from '../Button/Button';

const PokemonCard = (props) => {

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
                <label>Type: {props.pokemon.type}</label>
                <Button></Button>
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