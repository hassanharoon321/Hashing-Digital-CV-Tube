import React from "react";
import logo from "../images/logo.JPG";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGem } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <img src={logo} alt="logo" className="logo-image" />
        <ul>
          <li>DASHBOARD</li>
          <li>JOBS</li>
          <li>RECORD A CV</li>
          <li>
            <button className="user-btn">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
              Wajahat
            </button>
          </li>
          <li>
            <button className="premium-btn">
              <FontAwesomeIcon icon={faGem} className="gem-icon" />
              GET PREMIUM
            </button>
          </li>
          <li>FOR RECRUITERS</li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
