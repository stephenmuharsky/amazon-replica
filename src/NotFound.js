import React from "react";
import "./NotFound.css";
import dog from "./assets/french_bulldog.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="wrapper">
      <div className="body">
        <div className="text-container">
          <div className="line-one">
            <h1>Sorry, we couldn't fetch that page</h1>
          </div>
          <div className="line-two">
            <h2>
              Try searching or go to{" "}
              <Link to="/">
                <span className="link">Amazon Replica's homepage</span>
              </Link>
            </h2>
          </div>
          <div className="line-three">
            <h2>Nous sommes désolés, cette page n'existe pas</h2>
          </div>
          <div className="line-four">
            <h2>
              Reformulez votre recherche ou allez sur la{" "}
              <Link to="/" className="link">
                <span className="link">
                  page d'accueil
                  <br />
                  d'Amazon Replica
                </span>
              </Link>
            </h2>
          </div>
        </div>
        <div className="image-container">
          <img className="dog-image " src={dog} alt="dog" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
