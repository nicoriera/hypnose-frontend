import React from "react";
import Helmet from "react-helmet";
import PictureProfil from "../assets/pictures/picture_profil.JPG";
import Footer from "../components/Footer";

const Qui = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Qui</title>
        <meta
          name="description"
          content="Installé sur Hendaye au 14 boulevard Charles de Gaulle, je vous
          reçois sur rendez-vous du mardi au vendredi en journée et le
          samedi matin. Parking gratuit à Gaztelu Zahar (140 mètres) Bus n°3
          – Arrêt Ville (70 mètres) Bus n°33-35-37 – Arrêt Mairie (220
          mètres)"
        />
      </Helmet>
      <div className="container-qui">
        <div className="qui">
          <div className="qui-textes">
            <h1>Votre hypnothérapeute</h1>
            <div className="trait"></div>
            <p>
              Le mystère qui entoure le fonctionnement du cerveau a toujours
              attiré ma curiosité. Comment utiliser son potentiel au maximum ?
              Pourquoi avons-nous tendance à nous créer nos propres problèmes ?
              Et comment parvenons-nous à les résoudre ? Il y a plusieurs
              années, une proche connaissance a expérimenté l’hypnose pour
              vaincre une phobie et j’ai été le témoin privilégié de son
              changement. A partir de ce moment-là, une partie de moi savait
              qu’un jour ou l’autre, je deviendrai hypnothérapeute.
            </p>
            <p>
              Formé à l'hypnose Ericksonnienne et à la PNL (Programmation Neuro
              Linguistique) au sein de l'école de Psychothérapie Psynapse
              (Institut Européen reconnu par le World Hypnosis Organization
              (WHO)), je suis également diplômé de la spécialité gestion du
              poids et arrêt du tabac, ainsi qu'en gestion des troubles du
              sommeil.
            </p>
            <p>
              Installé sur Hendaye au 14 boulevard Charles de Gaulle, je vous
              reçois sur rendez-vous du mardi au vendredi en journée et le
              samedi matin. Parking gratuit à Gaztelu Zahar (140 mètres) Bus n°3
              – Arrêt Ville (70 mètres) Bus n°33-35-37 – Arrêt Mairie (220
              mètres)
            </p>
          </div>
          <div className="picture-qui">
            <img src={PictureProfil} alt="accueil" />
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Qui;
