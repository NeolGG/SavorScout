import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // handle your search here
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search Restaurants..."/>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
