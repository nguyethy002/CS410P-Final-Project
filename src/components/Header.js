import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/components/Header.style.sass";
const headerLogo = require("../assets/logo.svg");
const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const checkAtTop = () => {
      const isTop = window.scrollY < 5;
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
      <div className = "header-logo">
        <img src={headerLogo} id="logo" alt="top logo" />
        <h1>nime Dashboard</h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
