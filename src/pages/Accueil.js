import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// PICTURES
import PictureProfil from "../assets/pictures/picture_profil.JPG";
import PictureTabac from "../assets/pictures/arret_tabac.jpg";
import PicturePhobie from "../assets/pictures/phobie.jpg";
import PictureAlimentaire from "../assets/pictures/trouble_alimentaire.jpg";
import PicturePlus from "../assets/pictures/en_savoir_plus.jpg";

// COMPONENTS
import Button from "../components/Button";
import Pourquoi from "../components/Pourquoi";
import Logos from "../components/Logos";

const Accueil = () => {
  return (
    <div>
      <div className="accueil-accroche">
        <Helmet>
          <title>Cabinet Hypnose Hendaye : Christophe BACCOU</title>
          <meta
            name="description"
            content="Si vous êtes sur mon site, c’est que l’idée de changement fait
          écho en vous. Une très grande majorité de nos maux sont
          installés ou maintenus par la partie consciente de notre
          cerveau. L’état d’hypnose, en laissant intervenir notre partie
          inconsciente, va nous permettre de trouver des solutions pour
          reprendre le contrôle sur nos vies. Vous avez déjà, sans le
          savoir, fait une partie du chemin."
          />
        </Helmet>
        <div className="accueil-text-accroche">
          <h1>« Le changement est une porte qui s'ouvre de l’intérieur »</h1>
          <p>Tom Peters</p>
        </div>
      </div>
      <div className="container-accueil">
        <div>
          <div className="accueil-text">
            <div className="accueil-text-presentation">
              <div className="accueil-text-h1">
                <h1>Comment l'hypnose peut vous aider ?</h1>
                <div className="trait"></div>
              </div>
              <p>
                Si vous êtes sur mon site, c’est que l’idée de changement fait
                écho en vous. Une très grande majorité de nos maux sont
                installés ou maintenus par la partie consciente de notre
                cerveau. L’état d’hypnose, en laissant intervenir notre partie
                inconsciente, va nous permettre de trouver des solutions pour
                reprendre le contrôle sur nos vies. Vous avez déjà, sans le
                savoir, fait une partie du chemin.
                <br />
                Continuons cette route ensemble.
              </p>
            </div>
            <Link
              to={{
                pathname:
                  "https://www.resalib.fr/praticien/66295-christophe-baccou-hypnotherapeute-hendaye#newrdvmodal",
              }}
              target="_blank"
            >
              <Button text="Prendre rendez-vous" />
            </Link>
          </div>
          <div className="accueil-pourquoi">
            <div>
              <h1>Pourquoi consulter en hypnothérapie ?</h1>
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
                  <Link
                    className="accueil-pourquoi-link"
                    to="/presentation"
                    target="_blank"
                  >
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
                <img src={PictureProfil} alt="accueil" />
              </div>
              <div></div>
              <div className="accueil-qui-text">
                <h1>Qui suis-je ?</h1>
                <div className="trait"></div>
                <ul>
                  <li>
                    Certifié praticien en hypnose Ericksonienne par l’école de
                    psychothérapie Psynapse
                  </li>
                  <li>
                    Formation complémentaire en gestion du poids et arrêt du
                    tabac
                  </li>
                  <li>
                    Certifié technicien en PNL (programmation
                    neuro-linguistique)
                  </li>
                  <li>
                    Reconnu par la FFHTB (Fédération Française d’Hypnose et des
                    Thérapies Brèves) et la WHO (World Hypnosis Organization)
                  </li>
                  <li>
                    Adhérent du syndicat unitaire des professionnels de
                    l'hypnose (Sup-H)
                  </li>
                </ul>

                <div className="accueil-qui-bloc">
                  <div className="logos-hypnose">
                    <Logos />
                  </div>
                  <Link to="/qui" target="_blank">
                    <Button text="En savoir plus" />
                  </Link>
                </div>
                <div className="picture-accueil-media-query">
                  <img src={PictureProfil} alt="christope-baccou" />
                </div>
              </div>
            </div>
          </div>

          <div className="accueil-contact">
            <h1>Comment me contacter ?</h1>
            <div className="trait"></div>
            <div>
              <span className="bold">Christophe Baccou</span>
              <span> - Praticien certifié en hypnose ericksonienne</span>
            </div>
            <div className="info-christophe-siret">
              <span className="bold">Numéro de Siret :</span>
              <span> 822624086</span>
            </div>
            <div className="info-christophe-contact">
              <div>
                <span className="bold">Téléphone : </span>
                <span>06 37 66 52 97</span>
              </div>
              <div>
                <span className="bold">Email : </span>
                <a
                  className="link-mail"
                  href="mailto:christophebaccou.hypnose@gmail.com"
                >
                  christophebaccou.hypnose@gmail.com
                </a>
              </div>
            </div>
            <div className="info-christophe-venir">
              <div>
                <span className="bold">Lieu : </span>
                <span>14 boulevard du Général de Gaulle 64700 HENDAYE </span>
              </div>
              <div>
                <span className="bold">Horaires : </span>
                <span>du mardi au vendredi en journée et le samedi matin</span>
              </div>
            </div>
            <div>
              <span className="bold">Infos : </span>
              <span>
                Parking gratuit à Gaztelu Zahar (140 mètres) / Bus n°3 – Arrêt
                Ville (70 mètres) / Bus n°33-35-37 – Arrêt Mairie (220 mètres){" "}
              </span>
            </div>
            <div className="info-christophe-hebergement">
              <span className="bold">Site hébergé par :</span>
              <span> Hostinger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
