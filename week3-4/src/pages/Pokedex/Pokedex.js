import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

const Pokedex = () => {
  return (
    <div className="pokedex_page">
      <div className="pokedex_title">
        <h1>Pokedex</h1>
      </div>
      
      <SearchBar />
      
      <div className="pokedex_container">

      </div>
    </div>
  )
};

export default Pokedex;
