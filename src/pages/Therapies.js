import React from "react";

import Tarif from "../components/Tarif";
import Rdv from "../components/Rdv";
import Forfait from "../components/Forfait";

const Therapies = () => {
  return (
    <div className="container-tarifs">
      <Rdv
        rdv="RDV Adulte"
        age="(à partir de 18 ans)"
        infos="Chaque personne est unique, chaque séance l’est aussi. Je vous
          accompagne à votre rythme vers votre objectif"
        duree=" de 1h à 1h30"
        prix="60€"
        color="lightblue"
      />
      <Rdv
        rdv="RDV enfant-adolescent"
        age="(7-17 ans)"
        infos="Comme pour l’adulte, chaque séance est unique.
J’accompagne votre enfant / adolescent avec bienveillance."
        duree=" de 1h à 1h15"
        prix="45€"
        color="lightblue"
      />
      <Tarif
        tarif="Tarif réduit"
        etudiant="Étudiant
"
        demandeur="Demandeur d'emploi"
        rsa="RSA"
        infos="Pensez à prendre votre justificatif, sinon le prix sera celui d’une séance adulte."
        duree=" de 1h à 1h15"
        prix="45€"
        color="lightgreen"
      />
      <Forfait
        forfait="Forfait Gestion du poids"
        infos="Ce programme se fait sur du moyen/long terme. Il est de 4 séances espacées chacune de plusieurs semaines (3 à 8)"
        prix="200€"
        color="lightpink"
      />
      <Forfait
        forfait="Forfait Gestion du poids"
        infos="La pose de l’anneau gastrique hypnotique se fait sur 4 séances, plus une séance de suivi 2 mois après l’installation de l’anneau"
        prix="300€"
        color="lightpink"
      />
      <Forfait
        forfait="Forfait Arrêt tabac"
        infos="Comme chaque addiction est unique, nous déciderons ensemble de la durée du programme nécessaire (entre 2 et 4 séances) à votre libération définitive du tabac."
        prix="150€"
        color="lightpink"
      />
    </div>
  );
};

export default Therapies;
