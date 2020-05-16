import React, {useState, useEffect} from 'react';
import "../styles/api/Anime.style.sass"

const DataFetching = () => {
  const [results, setResults] = useState([]);
  const url = "https://kitsu.io/api/edge/anime";

  useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
      let characters = data.data;
      console.log(characters)
      setResults(characters)
    })
    .catch((error) => console.log(error));
  },[])
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


  