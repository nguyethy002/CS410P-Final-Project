import React from "react";
import { useStoreActions } from "easy-peasy";
// import Icon from 'react-fa';
import "../styles/components/SearchBar.style.sass";

const SearchBar = () => {

  const searchAnime = useStoreActions((actions) => actions.anime.searchAnime);

  const handleChange = (event) => {
    searchAnime({ searchTerm: event.target.value });
  };
 
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={handleChange}/>
    </div>
  );
};

export default SearchBar;
