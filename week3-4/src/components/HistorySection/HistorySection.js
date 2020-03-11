import React from 'react';
import './HistorySection.css';

const HistorySection = () => {
    return <section id="history" className="history_container">
    <div className="history-title">
      <h2>Pokemon history</h2>
    </div>
    <div className="history-row">
      <div className="history-column">
        <img src="./pokeball.svg" width="40px"></img>
        <label className="history-year" style={{color: "#1db7dd"}}>1980</label>
      </div>
      <div className="history-double-column">
        <label className="history-subtitle" style={{color: "#1db7dd"}}>First steps</label>
        <p>
          Pokémon is short for “Pocket Monsters", the original Japanese name. 
          The franchise has its roots in a gaming magazine in the early 1980s in Japan—Game Freak, 
          started by Satoshi Tajiri and Ken Sugimori. Tajiri was the writer, 
          while Sugimori was the illustrator.
        </p>
      </div>
    </div>
    <div className="history-row">
      <div className="history-double-column">
        <label className="history-subtitle" style={{color: "#b01ddd"}}>Game Boy</label>
        <p>
          26 February 1996 marks the debut of the Pokémon franchise in the form of both those games 
          on the Game Boy in Japan. At its heart, Pocket Monsters: Red and Green was a very basic 
          Japanese role-playing game.
        </p>
      </div>
      <div className="history-column-center">
        <img src="./console.svg" width="40px"></img>
        <label className="history-year" style={{color: "#b01ddd"}}>1996</label>
      </div>
    </div>
    <div className="history-row">
      <div className="history-column-bottom">
        <img src="./charmander.svg" width="40px"></img>
        <label className="history-year" style={{color: "#dd6a1d"}}>1998</label>
      </div>
      <div className="history-double-column">
        <label className="history-subtitle" style={{color: "#dd6a1d"}}>Charmander</label>
        <p>
          Charmander, known as Hitokage in Japan, is a Pokémon species in Nintendo's and Game Freak's 
          Pokémon franchise. Created by Atsuko Nishida. Charmander first appeared in the video games 
          Pokémon Red and Blue and subsequent sequels, later appearing in various merchandise, spinoff 
          titles and animated and printed adaptations of the franchise. The end of a Charmander's tail 
          is alight with a flame, and the flame's size reflects both the physical health and the emotions 
          of the individual. It is known as the Lizard Pokemon.
        </p>
      </div>
    </div>
  </section>
}

export default HistorySection;