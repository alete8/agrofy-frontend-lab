import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button/Button';

const SearchBar = () => {
    const [userQuery, setUserQuery] = useState(''); 

    const filterPokedex = () => {
        return console.log("Filtro");
    }

    return (
        <div>
            <input
            className="searchbar_input"
            type='text'
            value={userQuery}
            onChange={event => setUserQuery(event.target.value)} />
        <Button callback={() => filterPokedex()} label={'Search'}></Button>
        </div>
    ); 
} 

export default SearchBar;