import React, { useEffect } from "react";
import "../styles/api/Anime.style.sass";
import Icon from 'react-fa';
import AnimeScreen from "../components/AnimeScreen";
import CarouselScreen from "../components/Carousel";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { useStoreActions, useStoreState } from "easy-peasy";

const DataFetching = () => {
  const {  animeList, selectedIndex } = useStoreState(
    (state) => state.anime
  );
  const { setAnimeList, setRatingList} = useStoreActions(
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

  return (
    <div>
      <CarouselScreen/>
      {selectedIndex >= 0 ? <AnimeScreen /> : <p>Please select an anime</p>}
    </div>
  );
};

export default DataFetching;
