import React from "react";
import "../css/RecentJobs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function RecentJobs() {
  return (
    <div className="recent-jobs">
      <h2 className="jobs-heading-txt">Recent Jobs</h2>

      <span className="jobs-one">
        <section className="job-1">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
        <section className="job-2">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
        <section className="job-3">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
      </span>

      <span className="jobs-two">
        <section className="job-4">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
        <section className="job-5">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
        <section className="job-6">
          <h2 className="profession">Graphics Designer</h2>
          <p className="company">Technsym</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon-loc"/>
            Karchi Pakistan
          </p>
        </section>
      </span>

      <p className="view-more">View more </p>
    </div>
  );
}

export default RecentJobs;
