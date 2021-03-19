import React from "react";
import "../css/ProfileCounter.css";

function ProfileCounter() {
  return (
    <div className="countdown-container">
      <section className="profile-viewed">
        <h1 className="profile-text">Profile Viewed <span className="zero-text"> 00</span> </h1>
      </section>
      <section className="cv-shortlisted">
        <h1 className="shortlist-text">CV Shortlisted <span  className="zero-text"> 00</span></h1>
      </section>
    </div>
  );
}

export default ProfileCounter;
