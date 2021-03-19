import React from "react";
import "../css/FooterTube.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-solid-svg-icons";

function FooterTube() {
  return (
    <div className="footer-tube">
      <footer className="row-1">
        <h4>Job Seekers</h4>
        <h4>Popular Searches</h4>
        <p>Graphics Design Jobs in Karachi</p>
        <p>Video Editing Jobs in Karachi</p>
        <p>Accountant Jobs</p>
        <p>Fresher Jobs in Pakistan</p>
        <p>IT Interns Jobs in Karachi</p>
        <p>+9 more</p>
      </footer>

      <footer className="row-2">
        <h4>Locations</h4>
        <p>Jobs in Karachi</p>
        <p>Jobs in Lahore</p>
        <p>Jobs in Islamabad</p>
        <p>Jobs in Quetta</p>
        <p>Jobs in Hyderabad</p>
        <p>+2 more</p>
      </footer>

      <footer className="row-3">
        <h4>Nationality</h4>
        <p>Jobs of Arabs</p>
        <p>Jobs for Pakistani</p>
        <p>Jobs for Indians</p>
        <p>Jobs for Bandgladeshi</p>
        <p>+5 more</p>
      </footer>

      <footer className="row-4">
        <h4>Users</h4>
        <h4>Job Seekers</h4>
        <p>Home</p>
        <p>Dashboard</p>
        <p>My Profile</p>
        <p>Carrers Tips</p>
        <p>FAQ</p>
        <p>Mobile Apps</p>
      </footer>

      <footer className="row-5">
        <h4>Recruiters</h4>
        <p>Register</p>
        <p>Login</p>
        <p>Testimonials</p>
      </footer>

      <footer className="row-6">
        <h4>Download Our App</h4>
        <p>Follow us on</p>
      </footer>

      <span className="footer-nav">
        <ul className="footer-nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Feedback</li>
        </ul>
      </span>
    </div>
  );
}

export default FooterTube;
