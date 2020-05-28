import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useStoreState } from "easy-peasy";
import "../styles/components/AnimeData.style.sass";

const AnimeRating = () => {
  const anime = useStoreState(({ anime }) => anime.selectedAnime);
  const rating = useStoreState(
    ({ anime }) => anime.selectedAnime.attributes.ratingFrequencies
  );

  const dataRating = {
    labels: Object.keys(rating),
    datasets: [
      {
        label: "Rating Frequency",
        data: Object.values(rating),
        backgroundColor: "#d6bcfa",
        borderColor: "#44337a",
        borderWidth: 2,
      },
    ],
  };
  const dataRanking = {
    labels: ["Rating ranking", "Popularity ranking"],
    datasets: [
      {
        label: "Ranking",
        data: [anime.attributes.ratingRank, anime.attributes.popularityRank],
        backgroundColor: ["#d6bcfa", "#9f7aea"],
        borderColor: "#44337a",
        borderWidth: 2,
      },
    ],
  };

  function haha() {
    if (anime && rating) {
      if (anime.attributes.posterImage && anime.attributes.coverImage) {
        return (
          <div className="anime-container" key={anime.id}>
            <div className="anime-stat">
            <div className="anime-poster">
              <img src={anime.attributes.posterImage.medium} alt="Cover" />
              <p>Start Date: {anime.attributes.startDate}</p>
              <p>End Date: {anime.attributes.endDate}</p>
            </div>
            <div className="anime-info">
              <div className="anime-ranking">
                <div className="anime-ranking-info">
                  <h4>{anime.attributes.canonicalTitle}</h4>
                  <h4>{anime.attributes.titles.ja_jp}</h4>
                  <p>Average Rating: {anime.attributes.averageRating} %</p>
                </div>
                <div>
                  <Doughnut data={dataRanking} />
                </div>
              </div>
              <Line data={dataRating} />
            </div>
          </div>
          </div>
          
        );
      }
    }
  }
  return <div className="anime-data-list">{haha()}</div>;
};

export default AnimeRating;
