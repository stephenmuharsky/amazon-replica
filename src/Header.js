import React from "react";
import "./Header.css";
import amazonLogo from "./assets/amazon_header.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
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
          <span className="header-option-lineOne">
            Hello {user ? user.email : "Guest"}
          </span>
          <Link to={!user && "/login"} className="sign-in">
            <span
              className="header-option-lineTwo"
              onClick={handleAuthentication}
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
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
