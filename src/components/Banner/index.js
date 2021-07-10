import React from "react";
import baner from "../../assets/images/ph1.png";
import "./styles.css";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="BC-style">
          <p className="content-text">NEW TREND</p>
          <h1 className="content-title">COLLUSION</h1>
          <p className="content-text">
            An exclusive selection of this season's trends.
          </p>
          <div className="buttons">
            <button className="style-button">DISCOVER</button>
            <button className="style-button">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
