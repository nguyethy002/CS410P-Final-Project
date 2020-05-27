import React, { useEffect } from "react";
import "../styles/api/Anime.style.sass";

import AnimeScreen from "../components/AnimeScreen";
import SearchBar from "../components/SearchBar";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { useStoreActions, useStoreState } from "easy-peasy";

const DataFetching = () => {
  const { animeList, ratingList, selectedIndex } = useStoreState(
    (state) => state.anime
  );
  const { setAnimeList, setRatingList, changeAnime } = useStoreActions(
    (actions) => actions.anime
  );

  const url = "https://kitsu.io/api/edge/anime";
  
  useEffect(() => {
    async function getAnime() {
      try {
        var nextUrl = url;
        var animeArray = [];
        const ratingArray = [];

        while (animeArray.length < 50 && nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          const anime = data.data;
          console.log(anime);
          for (var i = 0; i < anime.length; i++) {
            ratingArray.push(anime[i].attributes.ratingFrequencies);
          }
          animeArray.push(...anime);
          nextUrl = data.links.next;

        }

        setAnimeList({ animeList: animeArray });
        setRatingList({ ratingList: ratingArray });
      } catch (error) {
        console.log("Request failed", error);
      }
    }
    getAnime();
  }, []);

  function carousel() {
    return (
      <Carousel className="anime-list" slidesPerPage={5} arrows infinite>
        {animeList && ratingList
          ? animeList.map((result, index) => {
              if (result.attributes.posterImage && result.attributes.coverImage) {
                return (
                  <button
                    onClick={() => changeAnime({ index })}
                    key={result.id}
                  >
                    <img id ="image" src={result.attributes.posterImage.small} alt="Cover" />
                  </button>
                );
              }
              return null;
            })
          : "Loading data"}
      </Carousel>
    );
  }

  return (
    <div className="anime-container">
      {carousel()}
      {selectedIndex >= 0 ? (
        <AnimeScreen/>
      ) : (
        "Click an anime"
      )}
      {/* <SearchBar /> */}
    </div>
  );
};

export default DataFetching;