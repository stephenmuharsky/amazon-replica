import React from "react";
import "./Header.css";
import amazonLogo from "./assets/amazon_header.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={amazonLogo} alt="Amazon Logo" />
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-lineOne">Hello Guest</span>
          <span className="header-option-lineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTwo">Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>
        <div className="header-option-basket">
          <ShoppingCartIcon />
          <span className="header-option-lineTwo header-basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
