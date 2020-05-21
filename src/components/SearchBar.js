import React, { useState, useEffect } from "react";
const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFound, setSearchFound] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (props.results) {
      const animeList = props.results;
      const found = animeList.filter((anime) =>
        // console.log(anime.attributes.canonicalTitle)
        anime.attributes.canonicalTitle.toLowerCase().includes(searchTerm)
      );
      setSearchFound(found);
    }
  }, [searchTerm]);
  console.log(searchFound);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchFound.map((item) => {
          if(searchTerm !== ""){
            while (item.id < 5) {
              return <li key={item.id}>{item.attributes.canonicalTitle}</li>;
            }
          }
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
