import React from 'react';
import './Hero.css';

const Hero = () => {
    return  <section className="hero_container">
            <div className="hero_element">
                <img src="/charmander-back.png" alt=""></img>
            </div>

            <div className="hero_element">
                <h1>Welcome to Pokedex</h1>
                <p>Join our community to find Pokemon's news</p>
                <a type="button" className="btn-primary" href="/#history">View more</a>
            </div>
    </section>
}

export default Hero;
