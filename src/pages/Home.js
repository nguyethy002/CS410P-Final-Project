import React from 'react';
import "../styles/pages/Home.style.sass";
import "../api/anime"
import DataFetching from '../api/anime';
const Home = () => {
  
  return (
    <div className="home">
      <DataFetching/>
    </div>
  ); 
};

export default Home;
