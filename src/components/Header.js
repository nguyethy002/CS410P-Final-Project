import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/components/Header.style.sass";
const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const checkAtTop = () => {
      const isTop = window.scrollY < 90;
      if (isTop !== atTop) {
        setAtTop(isTop);
      }
    };

    document.addEventListener("scroll", checkAtTop);
    return () => {
      document.removeEventListener("scroll", checkAtTop);
    };
  }, [atTop]);
  
  return (
    <div
      className={`header-container ${atTop ? "header-container-at-top" : ""}`}
    >
      <h1>Anime Dashboard</h1>
      <SearchBar />
    </div>
  );
};

export default Header;
