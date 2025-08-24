import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { logo } from "../utils/imageImports";
import { ROUTES } from "../utils/constants";

const Header = memo(() => {
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = (e) => {
    console.log("Erreur de chargement du logo:", e);
    setLogoError(true);
  };

  return (
    <header
      className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
      role="banner">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          className="flex items-center hover:opacity-80 transition-opacity"
          to={ROUTES.HOME}
          aria-label="Retour à l'accueil du Cabinet Hypnose Hendaye">
          {!logoError ? (
            <img
              className="h-9 w-auto object-contain"
              src={logo}
              alt="Logo Cabinet Hypnose Hendaye - Christophe Baccou"
              loading="eager"
              onError={handleLogoError}
            />
          ) : (
            /* Fallback si l'image ne charge pas */
            <div className="h-9 bg-primary-500 text-white flex items-center px-3 rounded font-bold text-xs whitespace-nowrap">
              HYPNOSE HENDAYE
            </div>
          )}
        </Link>
        <Navbar className="flex items-center" />
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
