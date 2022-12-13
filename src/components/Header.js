import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import Logo from "../assets/pictures/logo.png";

const Header = () => {
  return (
    <div className="container-header">
      <Link className="link-home" to="/">
        <img className="header-logo" src={Logo} alt="Cabinet Hypnose Hendaye" />
      </Link>
      <Navbar className="header-navbar" />
    </div>
  );
};

export default Header;
