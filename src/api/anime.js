import React, {useState, useEffect} from 'react';
import "../styles/api/Anime.style.sass"
import { Bar } from 'react-chartjs-2';
const DataFetching = () => {
  const [results, setResults] = useState([]);
  const [ratings, setRatings] = useState([]);
  const ratingArray = [];
  const url = "https://kitsu.io/api/edge/anime";

  useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
      let anime = data.data;
      // console.log(anime)
      // console.log(typeof anime[0].attributes.ratingFrequencies)
      // anime.forEach((item) =>{
      //   console.log(item.attributes.ratingFrequencies)
      // })
      for(var i = 0; i < anime.length; i++){
        ratingArray.push(anime[i].attributes.ratingFrequencies)
      }
      setResults(anime)
      setRatings(ratingArray);
    })
    .catch((error) => console.log(error));
  },[])
  console.log("this is ratings", ratings);
  return (
    <div className = "anime">
        {results.map(result => {      
          if(result.attributes.posterImage){
            return <div key = {result.id}>
              <p>{result.attributes.canonicalTitle}</p>
              <img src ={result.attributes.posterImage.medium} alt ="Cover"/>
            </div>
          }
          return null;
        })}
        {/* <Bar
          data={
            labels: 
          }
        /> */}
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


  