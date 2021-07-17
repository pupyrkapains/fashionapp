import React from "react";
import "./styles.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

function FirstBlock(props) {
  return (
    <div className="FirstBlock">
      <div className="FirstBlock-content">
        <div className="FBone">
          <img src={img1} alt="img1" className="img1" />
          <img src={img2} alt="img2" className="img2" />
          <img src={img3} alt="img3" className="img3" />
        </div>
        <div className="FBtwo">
          <div className="img4box">
            <img src={img4} alt="img4" className="img4" />
            <button className="FButton">CATEGORY NAME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;
