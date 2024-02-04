import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";

import Tarif from "../components/Tarif";
import Rdv from "../components/Rdv";
import Forfait from "../components/Forfait";

const Tarifs = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Tarifs</title>
        <meta name="description" content="Tarifs" />
      </Helmet>
      <div className="container-blocs">
        <div className="container-tarifs">
          <h1>Tarifs</h1>
          <div className="trait"></div>
          <div className="bloc">
            <div className="tarifs-blocs">
              <Rdv
                rdv="RDV Adulte"
                soustitre="(à partir de 18 ans)"
                infos="Chaque personne est unique, chaque séance l’est aussi. Je vous
            accompagne à votre rythme vers votre objectif"
                duree=" de 1h à 1h30"
                prix="60€"
                color="#FCF9EF"
              />
              <Rdv
                rdv="RDV enfant-adolescent"
                soustitre="(7-17 ans)"
                infos="Comme pour l’adulte, chaque séance est unique.
            J’accompagne votre enfant / adolescent avec bienveillance."
                duree=" de 1h à 1h15"
                prix="45€"
                color="#F3F2EE"
              />
              <Tarif
                tarif="RDV Tarif réduit"
                etudiant="Étudiant"
                demandeur="Demandeur d'emploi"
                rsa="RSA"
                infos="Pensez à prendre votre justificatif, sinon le prix sera celui d’une séance adulte."
                duree=" de 1h à 1h15"
                prix="50€"
                color="#F2F7F6"
              />
            </div>
            <div className="forfaits-blocs">
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
                infos="La pose de l’anneau gastrique hypnotique se fait sur 4 séances, plus une séance de suivi 2 mois après l’installation de l’anneau"
                prix="300€"
                color="#EDF0F5"
              />
            </div>
          </div>
        </div>
        <div className="tarif-payement">
          <p style={{ fontWeight: "bold" }}>Mode de paiement :</p>
          <ul>
            <li>Paiement par chèques ou espèces</li>
            <li>
              Certaines mutuelles prennent en charges les séances
              d'hypnothérapies, renseignez-vous auprès de la vôtre.
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tarifs;
