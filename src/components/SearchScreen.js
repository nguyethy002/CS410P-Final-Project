import React from "react";
import { useStoreState } from "easy-peasy";
import "../styles/components/SearchScreen.style.sass";

const SearchScreen = () => {
  const searchResult = useStoreState((state) => state.anime.searchResult);

  if (searchResult) console.log(searchResult.length);
  return (
    <div className="search-screen-container">
      <div className="search-screen">
        {searchResult && (searchResult.length < 50)
          ? searchResult.map((item) => {
              if (item.attributes.posterImage) {
                return (
                  <div key={item.id} className="search-screen-image">
                    <img
                      src={item.attributes.posterImage.small}
                      alt="Cover"
                    />
                    <p>{item.attributes.canonicalTitle}</p>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default SearchScreen;
