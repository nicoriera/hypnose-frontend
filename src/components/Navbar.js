import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
   const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
  <>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
      <ul className={sidebar ? 'menu active' : 'menu' }>
        <li>
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/presentation">
          <div>
          L’hypnose,
          </div>
          <div>
          c’est quoi ?
          </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/seance">
          <div>
          Comment
          </div>
          <div>
          se déroule une séance ?
          </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/qui">
          <div>
          Votre
          </div>
          <div>
          hypnothérapeute
          </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/tarifs">
          <div>
          Quels
          </div>
          <div>
          sont mes tarifs ?
          </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link-bold" to={{ pathname: "https://www.doctolib.fr/hypnotherapeute/hendaye/christophe-baccou" }} target="_blank">
          <div>
          Prendre
          </div>
          <div>
          rendez-vous
          </div>
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon  onClick={showSidebar} className="logo-cross" icon="times" />
    </nav>
    
    <div className="menu-toggle">
        <p>MENU</p>
        <FontAwesomeIcon onClick={showSidebar} className="logo-bars" icon="bars" />
      </div>
</>
  );
};

export default Navbar;
