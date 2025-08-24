import React, { useState, memo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = memo(() => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = useCallback(() => setSidebar((prev) => !prev), []);
  const closeSidebar = useCallback(() => setSidebar(false), []);

  // Ferme le menu avec la touche Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && sidebar) {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [sidebar, closeSidebar]);

  // Ferme le menu lors du scroll (UX mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (sidebar) {
        closeSidebar();
      }
    };

    if (sidebar) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sidebar, closeSidebar]);

  return (
    <>
      {/* Overlay pour fermer en cliquant à côté */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Menu mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Menu principal">
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={closeSidebar}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Fermer le menu"
              type="button">
              <FontAwesomeIcon icon="times" className="text-xl" />
            </button>
          </div>

          <ul className="flex-1 px-6 py-4 space-y-4" role="menubar">
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/"
                onClick={closeSidebar}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/presentation"
                onClick={closeSidebar}>
                L'hypnose, c'est quoi ?
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/seance"
                onClick={closeSidebar}>
                Comment se déroule une séance ?
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/qui"
                onClick={closeSidebar}>
                Thérapeute
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/tarifs"
                onClick={closeSidebar}>
                Quels sont mes tarifs ?
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-lg text-gray-700 hover:text-primary-600 transition-colors border-b border-gray-100"
                to="/contact"
                onClick={closeSidebar}>
                Contact
              </Link>
            </li>
            <li>
              <a
                className="block py-3 text-lg font-bold text-primary-600 hover:text-primary-700 transition-colors"
                href="https://www.resalib.fr/praticien/66295-christophe-baccou-hypnotherapeute-hendaye#newrdvmodal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}>
                Prendre RDV
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bouton menu mobile */}
      <div className="lg:hidden">
        <button
          onClick={showSidebar}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label={sidebar ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={sidebar}
          type="button">
          <FontAwesomeIcon icon="bars" className="text-xl" />
        </button>
      </div>

      {/* Menu desktop */}
      <nav
        className="hidden lg:flex items-center space-x-8"
        role="navigation"
        aria-label="Menu principal">
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/">
          Accueil
        </Link>
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/presentation">
          L'hypnose, c'est quoi ?
        </Link>
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/seance">
          Comment se déroule une séance ?
        </Link>
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/qui">
          Thérapeute
        </Link>
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/tarifs">
          Quels sont mes tarifs ?
        </Link>
        <Link
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          to="/contact">
          Contact
        </Link>
        <a
          className="bg-primary-500 text-white px-4 py-2 rounded-md font-bold hover:bg-primary-600 transition-colors"
          href="https://www.resalib.fr/praticien/66295-christophe-baccou-hypnotherapeute-hendaye#newrdvmodal"
          target="_blank"
          rel="noopener noreferrer">
          Prendre RDV
        </a>
      </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
