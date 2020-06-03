import React from "react";
import { useStoreState } from "easy-peasy";
import "../styles/pages/Home.style.sass";
import DataFetching from "../api/Anime";
import Header from "../components/Header";
import SearchScreen from "../components/SearchScreen";


const Home = () => {
  const searchResult = useStoreState((state) => state.anime.searchResult);
  return (
    <div className="home-container">
      <Header />
      {searchResult &&
      (searchResult.length === 0 || searchResult.length === 50) ? (
        <div className="home-anime">
          <DataFetching />
        </div>
      ) : (
        <SearchScreen />
      )}
    </div>
  );
};

export default Home;
