import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useStoreState } from "easy-peasy";
import CarouselScreen from "../components/Carousel";
import "../styles/components/AnimeData.style.sass";

const AnimeScreen = () => {
  const anime = useStoreState(({ anime }) => anime.selectedAnime);
  const rating = useStoreState(
    ({ anime }) => anime.selectedAnime.attributes.ratingFrequencies
  );
  function haha() {
    if (anime && rating) {
      if (anime.attributes.posterImage && anime.attributes.coverImage) {
        return (
          <div className="anime-container" key={anime.id}>
            <div className="anime">
              <div className="anime-title-container">
                <div className="anime-title">
                  <h2>{anime.attributes.canonicalTitle}</h2>
                  <h2>{anime.attributes.titles.ja_jp}</h2>
                </div>
              </div>
              <div className="anime-cover">
                <img src={anime.attributes.coverImage.original} alt="Cover" />
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return <div className="anime-data-list">{haha()}</div>;
};

export default AnimeScreen;
