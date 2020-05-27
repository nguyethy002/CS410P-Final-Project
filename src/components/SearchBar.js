import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import "../styles/components/SearchBar.style.sass";

const SearchBar = () => {
  const searchResult = useStoreState((state) => state.anime.searchResult);
  const searchAnime = useStoreActions((actions) => actions.anime.searchAnime);

  const handleChange = (event) => {
    searchAnime({ searchTerm: event.target.value });
  };
 
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResult && searchResult.length !== 50 
          ? searchResult.map((item) => (
              <li key={item.id}>{item.attributes.canonicalTitle}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SearchBar;
