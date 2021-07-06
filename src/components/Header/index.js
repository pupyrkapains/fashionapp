import React from "react";
import photo from "../../assets/images/header.svg";
import photo1 from "../../assets/images/menu.svg";
import "./styles.css";

function Header(props) {
  return (
    <div className="header">
      <div className="box-header">
        <div className="box-logo">
          <h3 className="logo">YOUR LOGO</h3>
        </div>
        <div className="box-content">
          <a href="" className="hdcontent">HOME</a>
          <a href="" className="hdcontent">SHOP</a>
          <a href="" className="hdcontent">LOOKBOOK</a>
          <a href="" className="hdcontent">FEATURES</a>
          <a href="" className="hdcontent">PAGES</a>
          <a href="" className="hdcontent">BLOG</a>
        </div>
        <div className="box-hdphoto">
          <img
            src={photo}
            alt="searchHEARTshopping-cart"
            className="photo"
          ></img>
        </div>
        <div>
          <img src={photo1} alt="MobileMenu" className="MobileMenu"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
