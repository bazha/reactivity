import React from 'react';
import './search-panel.css'
const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchSyle = {
      fontSize: '20px',
    };
    return (
      <input 
      className='search-input'
      placeholder={searchText} 
      style={searchSyle}
      />
    );
  }

export default SearchPanel;