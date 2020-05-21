import React, { useState, useEffect } from "react";
import "../styles/api/Anime.style.sass";
import AnimeScreen from "../components/AnimeScreen";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SearchBar from "../components/SearchBar";

const DataFetching = () => {
  const [results, setResults] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const url = "https://kitsu.io/api/edge/anime";
 
  useEffect(() => {
    async function getAnime() {
      try {
        var nextUrl = url;
        const ratingArray = [];
        var animeArray = [];

        while (animeArray.length < 50 && nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          const anime = data.data;

          for (var i = 0; i < anime.length; i++) {
            ratingArray.push(anime[i].attributes.ratingFrequencies);
          }
          animeArray.push(...anime);

          nextUrl = data.links.next;
        }

        setResults(animeArray);
        setRatings(ratingArray);
      } catch (error) {
        console.log("Request failed", error);
      }
    }
    getAnime();
  }, []);

  function carousel(){
    return(
    <Carousel className="anime-list" slidesPerPage={5} arrows infinite>
        {results && ratings
          ? results.map((result, index) => {
              if (result.attributes.posterImage) {
                return (
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="anime"
                    key={result.id}
                  >
                    <img src={result.attributes.posterImage.tiny} alt="Cover" />
                  </button>
                );
              }
              return null;
            })
          : "Loading data"}
      </Carousel>
    )
  }

  return (
    <div className="anime-container">
      <SearchBar results ={results}/>
      {carousel()}
      {selectedIndex >= 0 ? (
        <AnimeScreen
          anime={results[selectedIndex]}
          rating={ratings[selectedIndex]}
        />
      ) : (
        "Click an anime"
      )}
    </div>
  );
};

export default DataFetching;

// axios.get(url)
//   .then((response)=> response.json())
//   .then((data) => {
//     console.log(data.data)
//     let characters = data.data

//     characters.forEach((item)=>{
//     console.log(item.attributes.titles)
//     })
//   })
//   .catch((error) => console.log(error));

// fetch(url)
// .then((response)=> response.json())
// .then((data) => {
//   let anime = data.data;
//   console.log(anime)
//   // console.log(typeof anime[0].attributes.ratingFrequencies)
//   // anime.forEach((item) =>{
//   //   console.log(item.attributes.ratingFrequencies)
//   // })
//   const ratingArray = [];
//   for(var i = 0; i < anime.length; i++){
//     ratingArray.push(anime[i].attributes.ratingFrequencies)
//   }
//   setResults(anime)
//   setRatings(ratingArray);
// })
// .catch((error) => console.log(error));
