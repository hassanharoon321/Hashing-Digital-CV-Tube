import React from "react";
import "../css/CvTubeAd.css";
import Ad from "../images/ad.JPG";

function CvTubeAd() {
  return(
      <div className="ad">
          <img src={Ad} alt="add" width="100%" height="100%"/>
      </div>
  )
}

export default CvTubeAd;