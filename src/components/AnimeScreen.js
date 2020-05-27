import React from "react";
import { Bar } from "react-chartjs-2";
import { useStoreState } from "easy-peasy";

import "../styles/components/AnimeData.style.sass";

const AnimeScreen = () => {
  
  const anime = useStoreState(({ anime }) =>
    anime.selectedIndex > -1 ? anime.animeList[anime.selectedIndex] : null
  );
  const rating = useStoreState(({ anime }) =>
    anime.selectedIndex > -1 ? anime.ratingList[anime.selectedIndex] : null
  );

  const data = {
    labels: Object.keys(rating),
    datasets: [
      {
        label: "Rating Frequency",
        data: Object.values(rating),
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
      },
    ],
  };


  function haha() {
    if (anime && rating) {
      if (anime.attributes.posterImage && anime.attributes.coverImage) {
        return (
          <div className="anime" key={anime.id}>
            <div>
            <img src={anime.attributes.coverImage.original} alt="Cover" />
            </div>
            <div className ="anime-data">
            <p>{anime.attributes.canonicalTitle}</p>
            <Bar data={data} />
            </div>
          </div>
        );
      }
    }
  }
  return <div className="anime-data">{haha()}</div>;
};

export default AnimeScreen;


