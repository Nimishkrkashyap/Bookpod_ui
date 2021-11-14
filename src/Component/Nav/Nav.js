import React from "react";
import navStyle from "./Nav.module.css";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <>
      <div className={navStyle.container}>
       <GiHamburgerMenu className={navStyle.hamburger}/>
        <h1 className={navStyle.logo}>
          BookPod<span className={navStyle.dot}>.</span>
        </h1>
        <ul className={navStyle.menu}>
          <li>Home</li>
          <li>Categories</li>
          <li>Podcasts</li>
        </ul>
        <div className={navStyle.search_box}>
          <FiSearch className={navStyle.icon} />
          <h2 className={navStyle.search}>Search...</h2>
        </div>
        <FiSearch className={navStyle.search_icon} />
      </div>
    </>
  );
};

export default Nav;
