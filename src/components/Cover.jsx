import React from "react";
import "../css/Cover.css";
import coverImage from "../images/cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Cover() {
  return (
    <div>
      <section className="cover-image-body">
        <img src={coverImage} alt="cover" className="cover-image" />
        {/* Child Search Start */}
        <span className="cover-search">
          <h3>Welcome Back, Wajahat!</h3>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            name=""
            className="job-search"
            placeholder="Key Skills, Designation, Company or Work Experience"
          />
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <input
            type="text"
            name=""
            className="location-search"
            placeholder="location"
          />
          <button className="search-btn">SEARCH</button>
        </span>
        {/* Child Search End */}

        {/* Child Profile Card Start */}
      <span>
        
      </span>
      {/* Child Profile Card End */}
      </section>

      
    </div>
  );
}

export default Cover;
