import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
      name='search-input'
        type="text"
        placeholder="Write name of the film"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className='search-button'>Search</button>
    </form>
  );
}

export default SearchBar;
