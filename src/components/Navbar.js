import React, { useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = memo(() => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = useCallback(() => setSidebar(prev => !prev), []);
  // eslint-disable-next-line no-unused-vars
  const closeSidebar = useCallback(() => setSidebar(false), []);

  return (
    <>
      <nav 
        className={sidebar ? "nav-menu active" : "nav-menu"}
        role="navigation"
        aria-label="Menu principal"
      >
        <ul className={sidebar ? "menu active" : "menu"} role="menubar">
          <li>
            <Link className="link" to="/" onClick={closeSidebar}>
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
            <a
              className="link-bold"
              href="https://www.resalib.fr/praticien/66295-christophe-baccou-hypnotherapeute-hendaye#newrdvmodal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
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
});

Navbar.displayName = 'Navbar';

export default Navbar;
