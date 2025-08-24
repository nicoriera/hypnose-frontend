import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Erreur404 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>404 - Page non trouvé!</title>
        <meta name="description" content="404 - Page non trouvé!" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          404 - Page non trouvé!
        </h1>
        <Link
          to="/"
          className="inline-block bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors">
          Revenez à la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default Erreur404;
