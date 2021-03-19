import React from "react";
import "../css/ProfileCounter.css"

function ProfileCounter() {
  return(
      <div className="countdown-container">
          <section className="profile-viewed"><h1>Profile Viewed 00</h1></section>
          <section className="cv-shortlisted"><h1>CV Shortlisted 00</h1></section>
      </div>
  )
}

export default ProfileCounter;
