import React from "react";
import { Link } from "react-router-dom";

// PICTURES
import PictureProfil from "../assets/pictures/picture_profil.JPG";
import PictureTabac from "../assets/pictures/arret_tabac.jpg";
import PicturePhobie from "../assets/pictures/phobie.jpg";
import PictureAlimentaire from "../assets/pictures/trouble_alimentaire.jpg";
import PicturePlus from "../assets/pictures/en_savoir_plus.jpg";
import FondAccueil from "../assets/pictures/fond_accueil.jpg";

// COMPONENTS
import Pourquoi from "../components/Pourquoi";
import Logos from "../components/Logos";
import HelmetMeta from "../components/HelmetMeta";

const Accueil = () => {
  return (
    <div className="min-h-screen">
      <HelmetMeta
        title="Cabinet Hypnose Hendaye : Christophe BACCOU"
        description="Si vous êtes sur mon site, c'est que l'idée de changement fait
        écho en vous. Une très grande majorité de nos maux sont
        installés ou maintenus par la partie consciente de notre
        cerveau. L'état d'hypnose, en laissant intervenir notre partie
        inconsciente, va nous permettre de trouver des solutions pour
        reprendre le contrôle sur nos vies. Vous avez déjà, sans le
        savoir, fait une partie du chemin."
      />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${FondAccueil})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center max-w-4xl px-8 py-12">
          <h1 className="quote-manuscript mb-4">
            « Le changement est une porte qui s'ouvre de l'intérieur »
          </h1>
          <p className="text-xl md:text-2xl text-white text-center font-light opacity-90">
            Tom Peters
          </p>
        </div>
      </section>

      <main>
        {/* Section Pourquoi consulter */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="heading-ultra-clear mb-6">
                Pourquoi consulter en hypnothérapie ?
              </h2>
              <div className="trait-center"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <Pourquoi
                  picture={PictureTabac}
                  alt="Arrêt du tabac et autres addictions"
                  text="Arrêt du tabac et autres addictions"
                />
              </div>
              <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <Pourquoi
                  picture={PicturePhobie}
                  alt="Phobies, stress, douleurs, amélioration du sommeil"
                  text="Phobies, stress, douleurs, amélioration du sommeil…"
                />
              </div>
              <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <Pourquoi
                  picture={PictureAlimentaire}
                  alt="Gestion du trouble alimentaire"
                  text="Gestion du trouble alimentaire"
                />
              </div>
              <div className="flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <Link
                  to="/presentation"
                  className="block w-full"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Pourquoi
                    picture={PicturePlus}
                    alt="En savoir plus sur l'hypnose"
                    text="En savoir plus"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Qui suis-je */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="flex justify-center lg:col-span-1">
                <img
                  src={PictureProfil}
                  alt="Christophe Baccou - Hypnothérapeute"
                  className="w-full max-w-80 h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="heading-ultra-clear mb-6">Qui suis-je ?</h2>
                <div className="trait mb-6"></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Certifié praticien en hypnose Ericksonienne par l'école de
                      psychothérapie Psynapse
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Formation complémentaire en gestion du poids et arrêt du
                      tabac
                    </span>
                  </li>
                  <li>
                    Formation complémentaire en gestion des troubles du sommeil
                  </li>
                  <li>
                    Certifié technicien en PNL (programmation
                    neuro-linguistique)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Formation complémentaire en gestion des troubles
                      alimentaires
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Certifié technicien en PNL (programmation
                      neuro-linguistique)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Reconnu par la FFHTB (Fédération Française d'Hypnose et
                      des Thérapies Brèves) et la WHO (World Hypnosis
                      Organization)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 text-lg font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      Adhérent du syndicat unitaire des professionnels de
                      l'hypnose (Sup-H)
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <Logos />
                  </div>
                  <Link to="/qui" className="btn btn-secondary">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="heading-ultra-clear mb-6">
                Comment me contacter ?
              </h2>
              <div className="trait-center"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="text-center mb-8 pb-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Christophe Baccou
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Praticien certifié en hypnose ericksonienne
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Numéro de Siret :</strong> 822624086
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded-md border border-gray-200">
                  <strong className="min-w-24 text-gray-900">
                    Téléphone :
                  </strong>
                  <a
                    href="tel:0637665297"
                    className="text-primary-600 hover:text-primary-700 hover:underline">
                    06 37 66 52 97
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-md border border-gray-200">
                  <strong className="min-w-24 text-gray-900">Email :</strong>
                  <a
                    href="mailto:christophebaccou.hypnose@gmail.com"
                    className="text-primary-600 hover:text-primary-700 hover:underline">
                    christophebaccou.hypnose@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-md border border-gray-200">
                  <strong className="min-w-24 text-gray-900">Lieu :</strong>
                  <span className="text-gray-600">
                    14 boulevard du Général de Gaulle 64700 HENDAYE
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-md border border-gray-200">
                  <strong className="min-w-24 text-gray-900">Horaires :</strong>
                  <span className="text-gray-600">
                    Du mardi au vendredi en journée et le samedi matin
                  </span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-white rounded-md border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Accès :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="text-lg">🚗</span>
                    <span>Parking gratuit à Gaztelu Zahar (140 mètres)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="text-lg">🚌</span>
                    <span>Bus n°3 – Arrêt Ville (70 mètres)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="text-lg">🚌</span>
                    <span>Bus n°33-35-37 – Arrêt Mairie (220 mètres)</span>
                  </li>
                </ul>
              </div>
              <div>
                <span className="bold">Email : </span>
                <a
                  className="link-mail"
                  href="mailto:christophebaccou.hypnose@gmail.com">
                  christophebaccou.hypnose@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Accueil;
