import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
const Category = () => {
  const anAnime = useStoreState(
    ({ anime }) => anime.animeList[anime.selectedIndex]
  );
  useEffect(() => {
    async function getGenre() {
      if (anAnime) {
        const genreURL = anAnime.relationships.genres.links.self;
        const reponse = await fetch(genreURL);
        const data = await reponse.json();
        console.log(data);
      }
    }
    getGenre();
  }, [anAnime]);
  
  return <div className="category">Category</div>;
};

export default Category;
