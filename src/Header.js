import React from "react";
import "./Header.css";
import amazonLogo from "./assets/amazon_header.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-lineOne">Hello Guest</span>
          <Link to="/login" className="sign-in">
            <span className="header-option-lineTwo">Sign In</span>
          </Link>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTwo">Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header-option-basket">
            <ShoppingCartIcon />
            <span className="header-option-lineTwo header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
