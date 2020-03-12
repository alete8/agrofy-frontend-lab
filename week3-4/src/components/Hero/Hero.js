import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from '../Button/Button'

const Hero = () => {
    const goToHistory = () => {
        return <Link to="/home#history"></Link>
    }

    return  <section className="hero_container">
            <div className="hero_element">
                <img src="/charmander-back.png" alt=""></img>
            </div>

            <div className="hero_element">
                <h1>Welcome to Pokedex</h1>
                <p>Join our community to find Pokemon's news</p>
                <Button className="btn-primary" callback={() => goToHistory()} label="View more"/>
            </div>
    </section>
}

export default Hero;
