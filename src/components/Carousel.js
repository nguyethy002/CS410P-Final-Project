import React, { useEffect } from "react";
import "../styles/api/Anime.style.sass";
import Icon from 'react-fa';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { useStoreActions, useStoreState } from "easy-peasy";

const CarouselScreen = () => {
  const { animeList, ratingList} = useStoreState(
    (state) => state.anime
  );
  const { changeAnime } = useStoreActions(
    (actions) => actions.anime
  );
  
  function carousel() {
    return (
      <Carousel
        className="anime-list"
        slidesPerPage={5}
        arrows
        infinite
        arrowLeft={<Icon name="chevron-left"/>}
        arrowRight={<Icon name="chevron-right" />}
        addArrowClickHandler
      >
        {animeList && ratingList
          ? animeList.map((result, index) => {
              if (
                result.attributes.posterImage &&
                result.attributes.coverImage
              ) {
                return (
                  <button
                    onClick={() => changeAnime({ index })}
                    key={result.id}
                  >
                    <img
                      id="image"
                      src={result.attributes.coverImage.original}
                      alt="Cover"
                    />
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
    </div>
  );
};

export default CarouselScreen;
