import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/presentation">
            Présentation
          </Link>
        </li>
        <li>
          <Link className="link" to="/seance">
            Séance
          </Link>
        </li>
        <li>
          <Link className="link" to="/qui">
            Qui
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
