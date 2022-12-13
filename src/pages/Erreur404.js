import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
const Erreur404 = () => {
  return (
    <div className="container">
      <Helmet>
        <title>404 - Page non trouvé!</title>
        <meta name="description" content="404 - Page non trouvé!" />
      </Helmet>
      <div className="erreur">
        <h1 className="erreur-titre">404 - Page non trouvé!</h1>
        <Link to="/">Revenez à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Erreur404;
