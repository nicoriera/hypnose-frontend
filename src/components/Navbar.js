import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className={sidebar ? "menu active" : "menu"}>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="link" to="/presentation">
              L’hypnose, c’est quoi ?
            </Link>
          </li>
          <li>
            <Link className="link" to="/seance">
              Comment se déroule une séance ?
            </Link>
          </li>
          <li>
            <Link className="link" to="/qui">
              Votre hypnothérapeute
            </Link>
          </li>
          <li>
            <Link className="link" to="/tarifs">
              Quels sont mes tarifs ?
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="link-bold"
              to={{
                pathname:
                  "https://www.resalib.fr/praticien/66295-christophe-baccou-hypnotherapeute-hendaye#newrdvmodal",
              }}
              target="_blank"
            >
              Prendre rendez-vous
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={showSidebar}
          className="logo-cross"
          icon="times"
        />
      </nav>

      <div className="menu-toggle">
        <p>MENU</p>
        <FontAwesomeIcon
          onClick={showSidebar}
          className="logo-bars"
          icon="bars"
        />
      </div>
    </>
  );
};

export default Navbar;
