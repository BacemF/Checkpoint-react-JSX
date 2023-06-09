import React from "react";
import logo from "../logo.png";

//FontAwesome import 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
const Navebare = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
      <a className="navbar-brand" href="#">
        <img className="monlogo" src={logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
<FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              about me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              mes images
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             contact me
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navebare;
