import React from "react";
import "../styles/pages/Home.style.sass";
import DataFetching from "../api/Anime";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Anime Dashboard</h1>
        <SearchBar />
      </div>
      <div className="home-anime">
        <DataFetching />
      </div>
    </div>
  );
};

export default Home;
