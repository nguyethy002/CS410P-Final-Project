import React from "react";
import "../styles/pages/Home.style.sass";
import DataFetching from "../api/Anime";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <div className="home-anime">
        <DataFetching />
      </div>
    </div>
  );
};

export default Home;
