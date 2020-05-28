import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useStoreState } from "easy-peasy";
import CarouselScreen from "../components/Carousel";
import "../styles/components/AnimeData.style.sass";

const AnimeScreen = () => {
  const anime = useStoreState(({ anime }) =>
    anime.selectedIndex > -1 ? anime.animeList[anime.selectedIndex] : null
  );
  const rating = useStoreState(({ anime }) =>
    anime.selectedIndex > -1 ? anime.ratingList[anime.selectedIndex] : null
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
    labels:['Rating ranking', 'Popularity ranking'],
    datasets: [
      {
        label: "Ranking",
        data: [anime.attributes.ratingRank, anime.attributes.popularityRank],
        backgroundColor: ["#d6bcfa","#9f7aea"],
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
            <div className="anime">
              <div className = "anime-title-container">
                <div className="anime-title">
                  <h2>{anime.attributes.canonicalTitle}</h2>
                  <h2>{anime.attributes.titles.ja_jp}</h2>
                </div>
              </div>
              <div className="anime-cover">
                <img src={anime.attributes.coverImage.original} alt="Cover" />
              </div>
            </div>
            <div className ="anime-stat">
              <div className ="anime-poster">
                <img src={anime.attributes.posterImage.medium} alt="Cover" />
                <p>Start Date: {anime.attributes.startDate}</p>
                <p>End Date: {anime.attributes.endDate}</p>
              </div>
              <div className ="anime-info">
                <div className = "anime-ranking">
                  <div className = "anime-ranking-info">
                    <h4>{anime.attributes.canonicalTitle}</h4>
                    <h4>{anime.attributes.titles.ja_jp}</h4>
                    <p>Average Rating: {anime.attributes.averageRating} %</p>
                  </div>
                  <div>
                    <Doughnut data = {dataRanking}/>
                  </div> 
                </div>
                  <Bar data={dataRating} />
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return <div className="anime-data-list">
    
    {haha()}
    </div>;
};

export default AnimeScreen;
