import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button/Button';

const SearchBar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState(''); 

    return (
        <div className="searchbar_container">
            <input
                className="searchbar_input"
                type='text'
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)} />
            <Button 
                className="btn-primary" 
                callback={() => onSearch(searchValue)} 
                label={'Search'}>
            </Button>
        </div>
    ); 
} 

export default SearchBar;