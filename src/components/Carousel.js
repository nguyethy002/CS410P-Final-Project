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
        slidesPerPage={4}
        infinite
        arrows
        breakpoints={{
          640: {
            slidesPerPage: 1,
          },
          900: {
            slidesPerPage: 2,
          }
        }}
        // arrowLeft={<Icon name="chevron-left"/>}
        // arrowRight={<Icon name="chevron-right" />}
        // addArrowClickHandler
        
      >
        {animeList && ratingList
          ? animeList.map((result) => {
              if (
                result.attributes.posterImage &&
                result.attributes.coverImage
              ) {
                return (
                  <button
                    onClick={() => changeAnime(result)}
                    key={result.id}
                  >
                    <div className ="anime-image">
                      <img
                        id="image"
                        src={result.attributes.coverImage.original}
                        alt="Cover"
                      />
                    </div>
                  </button>
                );
              }
              return null;
            })
          : <p>Loading data</p>}
      </Carousel>
    );
    
  }

  return (
    <div className="anime-carousel">
      {carousel()}
    </div>
  );
};

export default CarouselScreen;
