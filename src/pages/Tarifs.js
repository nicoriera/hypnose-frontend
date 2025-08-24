import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";

import Rdv from "../components/Rdv";
import Forfait from "../components/Forfait";

const Tarifs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Tarifs</title>
        <meta name="description" content="Tarifs" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="heading-ultra-clear mb-6">Tarifs</h1>
          <div className="trait-center"></div>
        </div>

        <div className="space-y-12">
          {/* Tarifs individuels */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Consultations individuelles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Rdv
                rdv="RDV Adulte"
                soustitre="(à partir de 18 ans)"
                infos="Chaque personne est unique, chaque séance l'est aussi. Je vous
            accompagne à votre rythme vers votre objectif"
                duree=" de 1h à 1h30"
                prix="60€"
                color="#FCF9EF"
              />
              <Rdv
                rdv="RDV enfant-adolescent"
                soustitre="(7-17 ans)"
                infos="Comme pour l'adulte, chaque séance est unique.
            J'accompagne votre enfant / adolescent avec bienveillance."
                duree=" de 1h à 1h15"
                prix="50€"
                color="#F3F2EE"
              />
            </div>
          </div>

          {/* Forfaits */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Forfaits spécialisés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Forfait
                forfait="Forfait Addictions"
                soustitre="(tabac,alcool,...)"
                infos="Comme chaque addiction est unique, nous déciderons ensemble de la durée du programme nécessaire (entre 2 et 4 séances) à votre libération définitive du tabac."
                prix="A partir de 150€"
                color="#EDF0F5"
              />
              <Forfait
                forfait="Forfait Gestion du poids"
                infos="Ce programme se fait sur du moyen/long terme. Il est de 4 séances espacées chacune de plusieurs semaines (3 à 8)"
                prix="200€"
                color="#EDF0F5"
              />
              <Forfait
                forfait="Forfait anneau gastrique hypnotique"
                infos="La pose de l'anneau gastrique hypnotique se fait sur 4 séances, plus une séance de suivi 2 mois après l'installation de l'anneau"
                prix="300€"
                color="#EDF0F5"
              />
            </div>
          </div>

          {/* Informations de paiement */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Mode de paiement
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-primary-500 text-lg font-bold mt-0.5">
                    •
                  </span>
                  <span>Paiement par chèques ou espèces</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-500 text-lg font-bold mt-0.5">
                    •
                  </span>
                  <span>
                    Certaines mutuelles prennent en charges les séances
                    d'hypnothérapies, renseignez-vous auprès de la vôtre.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
