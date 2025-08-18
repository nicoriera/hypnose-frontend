import React, { memo } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { logo } from "../utils/imageImports";
import { ROUTES } from "../utils/constants";

const Header = memo(() => {
  return (
    <header className="container-header" role="banner">
      <Link 
        className="link-home" 
        to={ROUTES.HOME} 
        aria-label="Retour à l'accueil du Cabinet Hypnose Hendaye"
      >
        <img 
          className="header-logo" 
          src={logo} 
          alt="Logo Cabinet Hypnose Hendaye - Christophe Baccou"
          width="150"
          height="100"
          loading="eager"
        />
      </Link>
      <Navbar className="header-navbar" />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
