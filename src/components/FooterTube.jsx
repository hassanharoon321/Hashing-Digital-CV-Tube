import React from "react";
import "../css/FooterTube.css";

function FooterTube() {
  return (
    <div className="footer-tube">
      <h1 className="job-seekers">Job Seekers</h1>
      <h1 className="users">Users</h1>
      <foote className="table-cont">
        <table className="table-footer">
          <tr className="tab-headings">
            <th>Popular Searches</th>
            <th>Locations</th>
            <th>Nationality</th>
            <th>Job Seekers</th>
            <th>Recruiters</th>
          </tr>
          <tr className="tab-txt">
            <td>Graphics Design Jobs in Karachi</td>
            <td>Jobs in Karachi</td>
            <td>Jobs of Arabs</td>
            <td>Home</td>
            <td>Register</td>
          </tr>
          <tr className="tab-txt">
            <td>Video Editing Jobs in Karachi</td>
            <td>Jobs in Lahore</td>
            <td>Jobs for Pakistani</td>
            <td>Dashboard</td>
            <td>Login</td>
          </tr>
          <tr className="tab-txt">
            <td>Accountant Jobs</td>
            <td>Jobs in Islamabad</td>
            <td>Jobs for Indians</td>
            <td>My Profile</td>
            <td>Testimonials</td>
          </tr>
          <tr className="tab-txt">
            <td>Fresher Jobs in Pakistan</td>
            <td>Jobs in Quetta</td>
            <td>Jobs for Bandgladeshi</td>
            <td>Carrer Tips</td>
          </tr>
          <tr className="tab-txt">
            <td>IT Interns Jobs in Karachi</td>
            <td>Jobs in Hyderabad</td>
            <td>+5 more</td>
            <td>FAQ</td>
          </tr>
          <tr className="tab-txt">
            <td>+9 more</td>
            <td>+2 more</td>
            <td></td>
            <td>Mobile App</td>
          </tr>
        </table>
      </foote>
    </div>
  );
}

export default FooterTube;
