import React from 'react';
import SearchBar from "../components/SearchBar";
import "../styles/components/Header.style.sass";
const Header = () => {
  return (
    <div className="header">
      <h1>Anime Dashboard</h1>
        <SearchBar />
    </div>
  )
}

export default Header;
