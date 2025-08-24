import React from "react";
import { Helmet } from "react-helmet";

import Psycho from "../components/Psycho";
import Comportement from "../components/Comportement";
import Depassement from "../components/Depassement";
import Footer from "../components/Footer";

// PICTURES
import GifVagues from "../assets/pictures/lac.gif";
import PicturePsycho from "../assets/pictures/trouble_psycho.jpg";
import PictureComportement from "../assets/pictures/troubles_comportementaux.jpg";
import PictureDepassement from "../assets/pictures/depassement_de_soi.jpg";

const Presentation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Presentation</title>
        <meta
          name="description"
          content="L'hypnose est ce que l'on appelle scientifiquement un « état de
          conscience modifié »."
        />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Section Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-ultra-clear mb-6">
                L'hypnose c'est quoi ?
              </h1>
              <div className="trait mb-6"></div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'hypnose est ce que l'on appelle scientifiquement un « état
                  de conscience modifié ».
                </p>
                <p>
                  C'est un état naturel que l'on expérimente au quotidien.
                  Lorsqu'on lit un livre et que notre concentration s'évade,
                  quand on conduit sur un trajet connu et que l'on ne réfléchit
                  plus vraiment à la route… Dans tous ces moments-là du
                  quotidien, nous sommes dans cet état de conscience modifié.
                  Physiquement ici, mentalement ailleurs. Notre inconscient,
                  aussi appelée notre partie automatique, prend alors le relais
                  de notre conscient. En activant de façon volontaire cet état
                  lors d'une séance, le client accède à toutes ses ressources
                  nécessaires pour évoluer vers le mieux-être.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={GifVagues}
                alt="Vagues hypnotiques"
                className="max-w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Section Thérapies */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-ultra-clear mb-6">Thérapies</h2>
            <div className="trait"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Psycho
              picture={PicturePsycho}
              therapie="Troubles psychologiques / émotionnels"
              trouble1="Confiance en soi / estime de soi"
              trouble2="Gestion des émotions"
              trouble3="Anxiété / Angoisse / Attaque de panique"
              trouble4="Stress"
              trouble5="Burn-out"
              trouble6="Colère"
              trouble7="Peurs"
              trouble8="Difficultés personnelles"
              trouble9="Épreuves de la vie : maladie, séparation, deuil"
              trouble10="Relation difficile aux autres"
              trouble11="Difficulté scolaire"
              trouble12="Etc…"
              color="#F3F2EE"
            />
            <Comportement
              picture={PictureComportement}
              therapie="Troubles comportementaux"
              trouble1="Phobies"
              trouble2="Arrêt du tabac"
              trouble3="Compulsion alimentaire"
              trouble4="Trouble du sommeil"
              trouble5="Trouble sexuelle"
              trouble6="Enurésie"
              trouble7="Etc…"
              color="#F3F2EE"
            />
            <Depassement
              picture={PictureDepassement}
              therapie="Dépassement de soi"
              trouble1="Concentration"
              trouble2="Organisation"
              trouble3="Performances sportives"
              trouble4="Performances intellectuelles"
              trouble5="Préparation mentale à un événement"
              trouble6="Etc…"
              color="#F3F2EE"
            />
          </div>
        </section>

        {/* Section Remarque */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Remarque</h3>
          <p className="text-yellow-700 leading-relaxed">
            Une séance d'hypnose ne remplace en aucune manière un avis ou un
            traitement médical. Seul un médecin peut poser des diagnostics et
            lui seul est habilité à prescrire, modifier ou supprimer un
            traitement médical. L'hypnose peut vous accompagner lors de votre
            traitement prescrit par votre médecin, parlez-en avec lui.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presentation;
