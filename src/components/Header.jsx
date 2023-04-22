import React from "react";
import Typed from "react-typed";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Adress";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>
          <FullName />
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "Ingenieur conception mecanique",
            "Chef de projets",
            "Engineering manager",
            "Developpeur web debutant",
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
        <div className="me">
          <ProfilePhoto />
        </div>
        <a href="#" className="btn-main">
          Contact me
        </a>
        <h3 className="adress">
          <Address />
        </h3>
      </div>
    </div>
  );
};

export default Header;
