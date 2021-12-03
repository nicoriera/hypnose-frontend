import React from "react";
import { Link } from "react-router-dom";

// PICTURES
import Consultation from "../assets/pictures/fond_accueil.jpg";
import LogoPsynapse from "../assets/pictures/logo_psynapse.png"
import LogoWho from "../assets/pictures/logo_who.png"

import Map from "../components/Map"

const Accueil = () => {
  return (
    <div className="container-accueil">
      <div className="accueil">
        <div style={{backgroundImage: `url(${Consultation})`}} className="accueil-accroche">
          <div className="accueil-text-accroche">
            <h2 className="accueil-text-accroche-citation">
              « Le changement est une porte qui ne s’ouvre que de l’intérieur »
            </h2>
            <p >Tom Peters</p>
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
          </div>
          <div className="accueil-contact">
            <div className="accueil-contact-presentation">
            <h3>Contact</h3>
            <div>Hendaye</div>
            <div>14 boulevard du Général de Gaulle</div>
            <div>64700 HENDAYE</div>
            <div>Tél. 06 xx xx xx xx</div>
            <div>christophebaccou.hypnose@gmail.com</div>
            </div>
            <div>
            <Map className="container-map"/>
            </div>
            
          </div>
        </div>

        <div className="logos-hypnose">
        <Link className="logo-psynapse" to={{ pathname: "https://psynapse.fr/" }} target="_blank">
        <img src={LogoPsynapse} alt="logo-psynapse" />
        </Link>
        <Link className="logo-who" to={{ pathname: "https://www.world-hypnosis.org/fr" }} target="_blank">
        <img src={LogoWho} alt="logo-who" />
        </Link>
        </div>
       
      </div>

     
     
    </div>

  );
};

export default Accueil;


{/* <div className="accueil-text-contact">DOCTOLIB ET N° tél</div> */}

{/* <div className="accueil-button">
            <Link to="/presentation">
              <button className="button-contact">En savoir plus</button>
            </Link>
          </div> */}