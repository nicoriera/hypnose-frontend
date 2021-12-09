import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from "../components/Navbar";

import Logo from "../assets/pictures/logo.png"

const Header = () => {
  return (
    <div className="container-header">
      <Link className="link-home" to="/">
      <img className="header-logo" src={Logo} alt="Logo"/>
      </Link>
      <Navbar className="header-navbar" />
      <FontAwesomeIcon className="menu-toggle"icon="bars" />
     
    </div>
  );
};

export default Header;
