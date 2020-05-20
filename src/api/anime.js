import React, { useState, useEffect } from "react";
import "../styles/api/Anime.style.sass";
import AnimeScreen from "../components/AnimeScreen";

const DataFetching = () => {
  const [results, setResults] = useState(null);
  const [ratings, setRatings] = useState(null);
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
;
  return (
    <div className="anime-list">
      {results && ratings
        ? results.map((result, index) => {
            if (result.attributes.posterImage) {
              return (
                <div className="anime" key={result.id} onClick={<AnimeScreen results = {results} ratings ={ratings}/>}>
                  <img src={result.attributes.posterImage.tiny} alt="Cover" />
                </div>
              );
            }
            return null;
          })
        : "Loading data"}
       
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
