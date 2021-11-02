import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className="container-header">
      <Link className="link-home" to="/">
        <h2>Hypnothérapeute</h2>
        <p>Christophe Baccou</p>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
