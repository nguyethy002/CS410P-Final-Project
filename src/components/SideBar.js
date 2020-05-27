import React from 'react';
import "../styles/components/SideBar.style.sass";
import Category from "../api/Category"
const SideBar = (prop) => {
  
  return (
    <div className="sidebar">
      <Category/>
    </div>
  ); 
};

export default SideBar;