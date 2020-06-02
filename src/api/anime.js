import React, { useEffect } from "react";
import AnimeScreen from "../components/AnimeScreen";
import { useStoreActions, useStoreState } from "easy-peasy";
import CarouselScreen from "../components/Carousel";
import AnimeRating from "../components/AnimeRating";

const DataFetching = () => {
  // const { selectedAnime } = useStoreState((state) => state.anime);
  const { setAnimeList, setRatingList } = useStoreActions(
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
      <AnimeScreen/>
      <CarouselScreen/>
      <AnimeRating/>
    </div>
  );
};

export default DataFetching;
