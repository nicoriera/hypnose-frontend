import React from "react";
import { Link } from "react-router-dom";

// PICTURES
import LogoPsynapse from "../assets/pictures/logo_psynapse.png";
import LogoWho from "../assets/pictures/logo_who.png";
import LogoFfhtb from "../assets/pictures/logo_FFHTB.jpg";
import PictureProfil from "../assets/pictures/picture_profil.JPG"
import PictureTabac from "../assets/pictures/arret_tabac.jpg"
import PicturePhobie from "../assets/pictures/phobie.jpg"
import PictureAlimentaire from "../assets/pictures/trouble_alimentaire.jpg"
import PicturePlus from "../assets/pictures/en_savoir_plus.jpg"

// COMPONENTS
import Button from "../components/Button"
import Pourquoi from "../components/Pourquoi"

const Accueil = () => {
  
  return (
    <div>
      <div  className="accueil-accroche">
          <div className="accueil-text-accroche">
            <h2 className="accueil-text-accroche-citation">
              « Le changement est une porte qui s'ouvre de l’intérieur »
            </h2>
            <p >Tom Peters</p>
          </div>
      </div>
      <div className="container-accueil">
        <div>
            <div className="accueil-text">
              <div className="accueil-text-presentation">
                <div className="accueil-text-h2">
                  <h2>Comment l'hypnose peut vous aider ?</h2>
                  <div className="trait"></div>
                </div>
                <p> Si vous êtes sur mon site, c’est que l’idée de changement fait
                écho en vous. Une très grande majorité de nos maux sont installés
                ou maintenus par la partie consciente de notre cerveau. L’état
                d’hypnose, en laissant intervenir notre partie inconsciente, va
                nous permettre de trouver des solutions pour reprendre le contrôle
                sur nos vies. Vous avez déjà, sans le savoir, fait une partie du
                chemin.</p>
                <p>Continuons cette route ensemble.</p>
              </div>
              <Link to={{ pathname: "https://www.doctolib.fr/" }} target="_blank">
                <Button text="Prendre rendez-vous"/>
              </Link>
            </div>
            <div className="accueil-pourquoi">
              <div>
                <h2>Pourquoi consulter en hypnothérapie ?</h2>
                <div className="trait"></div>
                <div className="accueil-pourquoi-container">
                  <div className="accueil-pourquoi-blocs">
                    <Pourquoi 
                    picture={PictureTabac}
                    alt="arret_tabac"
                    text="Arrêt du tabac et autres addictions"
                    />
                    <Pourquoi 
                    picture={PicturePhobie}
                    alt="phobie"
                    text="Phobies, stress, douleurs, amélioration du sommeil…"
                    />
                    <Pourquoi 
                    picture={PictureAlimentaire}
                    alt="trouble_alimentaire"
                    text="Gestion du trouble alimentaire"
                    />
                    <Link className="accueil-pourquoi-link" to="/presentation" target="_blank">
                    <Pourquoi
                    picture={PicturePlus}
                    alt="en_savoir_plus"
                    text="En savoir plus"
                    />
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="accueil-qui">
              <div className="accueil-text-qui">
                <div className="picture-accueil">
                  <img  src={PictureProfil} alt="accueil" />
                </div>
                <div className="accueil-qui-text">
                  <h2>Qui suis-je ?</h2>
                  <div className="trait"></div>
                  <ul>
                    <li>Certifié praticien en hypnose Ericksonienne par l’école de psychotéraphie Psynapse</li>
                    <li>Spécialisé en gestion de poids et arrêt du tabac</li>
                    <li>Certifié technicien en PNL (programmation neuro-linguistique)</li>
                    <li>Reconnu par la FFHTB (Fédération Française d’Hypnose et des Thérapies Brèves) et la WHO (World Hypnosis Organization)</li>
                  </ul>
                <div className="accueil-qui-bloc">
                  <div className="logos-hypnose">
                    <Link className="logo-psynapse" to={{ pathname: "https://psynapse.fr/" }} target="_blank">
                    <img src={LogoPsynapse} alt="logo-psynapse" />
                    </Link>
                    <Link className="logo-who" to={{ pathname: "https://www.world-hypnosis.org/fr" }} target="_blank">
                    <img src={LogoWho} alt="logo-who" />
                    </Link>
                    <Link className="logo-ffhtb" to={{ pathname: "https://psynapse.fr/certifications-hypnose-pnl/federation-francaise-hypnose-therapies-breves-ffhtb/" }} target="_blank">
                    <img src={LogoFfhtb} alt="logo-ffhtb" />
                    </Link>
                  </div>
                  <Link to="/qui" target="_blank">
                    <Button text="En savoir plus"/>
                  </Link>
                </div>
                </div>
              </div>
            </div>

        <div className="accueil-container-contact">
          <div className="accueil-infos-contact">
          <div className="accueil-info-christophe">
            <h2>Comment me contacter ?</h2>
            <div className="trait"></div>
            <div><span className="bold">Christophe Baccou</span><span> - Praticien certifié en hypnose ericksonienne</span></div>
            <div className="info-christophe-siret"><span className="bold">Numéro de Siret :</span><span> xxxxx</span></div>
            <div className="info-christophe-contact">
              <div><span className="bold">Téléphone : </span><span>06 37 66 52 97</span></div>
              <div>
                <span className="bold">Email : </span>
                <a className="link-mail" href="mailto:christophebaccou.hypnose@gmail.com">christophebaccou.hypnose@gmail.com</a>
              </div>
            </div>
            <div className="info-christophe-venir">
              <div><span className="bold">Lieu : </span><span>14 boulevard du Général de Gaulle 64700 HENDAYE </span></div>
              <div><span className="bold">Horaires : </span><span>du mardi au vendredi en journée et le samedi matin</span></div>
            </div>
            <div><span className="bold">Infos : </span><span>Parking gratuit à Gaztelu Zahar (140 mètres) / Bus n°3 – Arrêt Ville (70 mètres) / Bus n°33-35-37 – Arrêt Mairie (220 mètres) </span></div>
            <div className="info-christophe-hebergement"><span className="bold">Site hébergé par :</span><span> xxxxx</span></div>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Accueil;


