import React from "react";
import { Link } from "react-router-dom";

import Consultation from "../../assets/images/accueil-hypnose.jpeg";

const Accueil = () => {
  return (
    <div className="container-accueil">
      <div className="accueil">
        <div className="accueil-accroche">
          <div className="accueil-text-accroche">
            <h2 className="accueil-text-accroche-citation">
              « Le changement est une porte qui ne s’ouvre que de l’intérieur »
            </h2>
            <p>Tom Peters</p>
          </div>
          <div className="accueil-image">
            <img src={Consultation} alt="Consultation" />
          </div>
        </div>

        <div className="accueil-info">
          <div className="accueil-text">
            <div className="accueil-text-presentation">
              Si vous êtes sur mon site, c’est que l’idée de changement fait
              écho en vous. Une très grande majorité de nos maux sont installés
              ou maintenus par la partie consciente de notre cerveau. L’état
              d’hypnose, en laissant intervenir notre partie inconsciente, va
              nous permettre de trouver des solutions pour reprendre le contrôle
              sur nos vies. Vous avez déjà, sans le savoir, fait une partie du
              chemin. Continuons cette route ensemble.
            </div>
            <div className="accueil-text-contact">DOCTOLIB ET N° tél</div>
          </div>

          <div className="accueil-button">
            <Link to="/presentation">
              <button className="button-contact">En savoir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
