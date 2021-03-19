import React from "react";
import "../css/Cover.css";
import coverImage from "../images/cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Cover() {
  return (
    <div>
      <section className="cover-image-body">
        <img src={coverImage} alt="cover" className="cover-image" />
        {/* Child Search Start */}
        <span className="cover-search">
          <h3>Welcome back, Wajahat!</h3>
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
        <span className="profile-card">
          <section className="description">
            <section className="user-icon">
              <FontAwesomeIcon icon={faUser} className="user-fontawesome" />
            </section>
            <section className="description-text">
              <h4 className="current-user-name">Mohammad Wajahad</h4>
              <p className="profession">Graphics Designer</p>
            </section>
          </section>
          <section className="completed-updated">
            <h1 className="heading-profile">
              5<small className="profile-completed">% Profile Complete</small>
            </h1>
            <small className="updated-today">Updated Today</small>
          </section>
          <progress
            max="100"
            value="20"
            className="profile-progress"
          ></progress>

          <section className="complete-profile-now">
            <h5 className="comp-prof">Complete your profile now!</h5>
            <p className="oppo">
              You are missing out Opportounities Complete Your Profile will make
              it easier to show up in search
            </p>
          </section>

          <h5 className="prof-imp">Profile Impression</h5>
          <p className="prof-search">
            Number of times your Profile Showed up on search
          </p>

          <span className="count">
            <section className="search-apperances">
              00 Search Apperances
            </section>

            <section className="clicks-on-profile">
              00 Clicks on Profile
            </section>
          </span>
        </span>
        {/* Child Profile Card End */}

        {/* Job Alert Start */}
        <span className="job-alert">
          <section>
            <h2 className="specific-job">Looking for a specific job?</h2>
            <p className="suitable-job">
              Create a Job Alert! We will notify you whenever there is a new job
              that is suitable for you.
            </p>
          </section>
          <button className="job-alert-btn">Create a Job Alert</button>
        </span>
        {/* Job Alert end */}
      </section>
    </div>
  );
}

export default Cover;
