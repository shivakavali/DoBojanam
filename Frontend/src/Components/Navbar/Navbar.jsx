import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  assets,
  menu_list,
  food_list,
} from "../../assets/frontend_assets/assets";
import "./Navbar.css";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({login, setLogin}) => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className="navbar">
      <Link to='/'><img className="app-logo" src={assets.logo} alt="app-logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setSelectedMenu("Home")}
          className={selectedMenu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setSelectedMenu("Menu")}
          className={selectedMenu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setSelectedMenu("Mobile-App")}
          className={selectedMenu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a href="#footer"
          onClick={() => setSelectedMenu("Contact us")}
          className={selectedMenu === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img
          className="search-icon"
          src={assets.search_icon}
          alt="search-icon"
        />
        <div className="navbar-search-icon">
          <Link to='/cart'><img className="cart" src={assets.basket_icon} alt="cart-icon" /></Link>
          <div className={(getTotalCartAmount === 0) ? "" : "dot"}></div>
        </div>
        {login === false && <button onClick={()=>setLogin(true)}>signin</button>}
      </div>
    </div>
  );
};

export default Navbar;
