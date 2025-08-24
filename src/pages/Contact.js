import React from "react";
import Map from "../components/Map";
import Helmet from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Comment me contacter</title>
        <meta
          name="description"
          content="Christophe Baccou - Praticien certifié en hypnose ericksonienne"
        />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="mb-8">
              <h1 className="heading-ultra-clear mb-6">Comment me contacter ?</h1>
              <div className="trait mb-6"></div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Christophe Baccou
                </h2>
                <p className="text-gray-600 mb-4">
                  Praticien certifié en hypnose ericksonienne
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Numéro de Siret :</strong> 822624086
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <strong className="min-w-20 text-gray-900">Téléphone :</strong>
                  <a 
                    href="tel:0637665297" 
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    06 37 66 52 97
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <strong className="min-w-20 text-gray-900">Email :</strong>
                  <a
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                    href="mailto:christophebaccou.hypnose@gmail.com"
                  >
                    christophebaccou.hypnose@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <strong className="min-w-20 text-gray-900">Lieu :</strong>
                  <span className="text-gray-600">
                    14 boulevard du Général de Gaulle 64700 HENDAYE
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <strong className="min-w-20 text-gray-900">Horaires :</strong>
                  <span className="text-gray-600">
                    Du mardi au vendredi en journée et le samedi matin
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <strong className="text-gray-900">Accès :</strong>
                <div className="mt-2 space-y-1 text-gray-600">
                  <p>• Parking gratuit à Gaztelu Zahar (140 mètres)</p>
                  <p>• Bus n°3 – Arrêt Ville (70 mètres)</p>
                  <p>• Bus n°33-35-37 – Arrêt Mairie (220 mètres)</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                <strong>Site hébergé par :</strong> Hostinger
              </div>
            </div>
          </div>
          
          {/* Carte */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
