import React from "react";

import Tarif from "../components/Tarif";
import Rdv from "../components/Rdv";
import Forfait from "../components/Forfait";
import Psycho from "../components/Psycho";
import Comportement from "../components/Comportement"
import Depassement from "../components/Depassement"

const Therapies = () => {
  return (
  <div className="container">
  <div className="container-blocs">
  <div className="container-tarifs">
      <h2>Tarifs</h2>
      <div className="tarifs-blocs">
        <Rdv
        rdv="RDV enfant-adolescent"
        age="(7-17 ans)"
        infos="Comme pour l’adulte, chaque séance est unique.
        J’accompagne votre enfant / adolescent avec bienveillance."
        duree=" de 1h à 1h15"
        prix="45€"
        color="lightblue"
        />
        <Rdv
        rdv="RDV Adulte"
        age="(à partir de 18 ans)"
        infos="Chaque personne est unique, chaque séance l’est aussi. Je vous
          accompagne à votre rythme vers votre objectif"
        duree=" de 1h à 1h30"
        prix="60€"
        color="lightblue"
        />

        <Tarif
        tarif="Tarif réduit"
        etudiant="Étudiant"
        demandeur="Demandeur d'emploi"
        rsa="RSA"
        infos="Pensez à prendre votre justificatif, sinon le prix sera celui d’une séance adulte."
        duree=" de 1h à 1h15"
        prix="45€"
        color="lightgreen"
        />
       <Forfait
        forfait="Forfait Arrêt tabac"
        infos="Comme chaque addiction est unique, nous déciderons ensemble de la durée du programme nécessaire (entre 2 et 4 séances) à votre libération définitive du tabac."
        prix="150€"
        color="lightpink"
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
      </div>
    </div>
    <div className="container-therapies">
    <h2>Thérapies</h2>
    <div className="therapies-blocs">
     <Psycho
        therapie="Troubles psychologiques / émotionnels"
        trouble1="Confiance en soi / estime de soi"
        trouble2="Gestion des émotions"
        trouble3="Anxiété / Angoisse / Attaque de panique"
        trouble4="Stress"
        trouble5="Burn-out"
        trouble6="Colère"
        trouble7="Peur"
        trouble8="Difficultés personnelles"
        trouble9="Traverser une épreuve : maladie, séparation, deuil"
        trouble10="Relation difficile aux autres"
        trouble11="Difficulté scolaire"
        trouble12="Etc…"
        color="lightsalmon"
      />
      <Comportement
        therapie="Troubles comportementaux"
        trouble1="Phobies"
        trouble2="Arrêt du tabac"
        trouble3="Compulsion alimentaire"
        trouble4="Trouble du sommeil"
        trouble5="Trouble sexuelle"
        trouble6="Enurésie"
        trouble7="Etc…"
        color="lightsalmon"
      />
        <Depassement
        therapie="Dépassement de soi"
        trouble1="Concentration"
        trouble2="Organisation"
        trouble3="Performances sportives"
        trouble4="Performances intellectuelles"
        trouble5="Préparation mentale à un événements"
        trouble6="Etc…"
        color="lightyellow"
      />
      </div>
    </div>
  </div>
   </div>

  );
};

export default Therapies;
