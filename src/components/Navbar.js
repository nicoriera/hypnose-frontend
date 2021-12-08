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
            L’hypnose, c’est quoi ?
          </Link>
        </li>
        <li>
          <Link className="link" to="/seance">
            Comment se déroule une séance ?
          </Link>
        </li>
        <li>
          <Link className="link" to="/qui">
            Votre hypnothérapeute
          </Link>
        </li>
        <li>
          <Link className="link" to="/therapies">
            Thérapies et tarifs
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
         <li>
          <Link className="link-bold" to={{ pathname: "https://www.doctolib.fr/" }} target="_blank">
            Prendre rendez-vous
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
