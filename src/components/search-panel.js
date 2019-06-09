import React from 'react';

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchSyle = {
      fontSize: '20px',
    };
    return (
      <input 
      placeholder={searchText} 
      style={searchSyle}
      />
    );
  }

export default SearchPanel;