import React from "react";

// COMPONENTS
import Psycho from "../components/Psycho";
import Comportement from "../components/Comportement"
import Depassement from "../components/Depassement"
import Footer from "../components/Footer";

// PICTURES
import Vagues from "../assets/pictures/vague.gif"
import PicturePsycho from "../assets/pictures/trouble_psycho.jpg"
import PictureTrouble from "../assets/pictures/trouble_alimentaire.jpg"
import PictureDepassement from "../assets/pictures/depassement_de_soi.jpg"

const Presentation = () => {
  return (
  <div className="container">
    <div className="presentation">
      <div className="presentation-hypnose" >
        <div className="presentation-hypnose-text">
          <h2>L’hypnose c’est quoi ?</h2>
          <p>
          L’hypnose est ce qu’on appelle scientifiquement un « état de conscience
          modifié ». C’est un état naturel que l’on expérimente au quotidien.
          Lorsqu’on lit un livre et que notre concentration s’évade, quand on
          conduit sur un trajet connu et que l’on ne réfléchit plus vraiment à la
          route. Dans tous ces moments là du quotidien, nous sommes dans cet état
          de conscience modifié. Physiquement ici, mentalement ailleurs. C’est
          dans ces moments que notre inconscient, aussi appelée notre partie
          automatique, prend le relais de notre conscient. En activant de façon
          volontaire cet état de transe hypnotique lors d’une séance, le client
          accède à toutes ses ressources nécessaires pour évoluer vers le
          mieux-être.
          </p>
        </div>
        <div className="presentation-hypnose-gif">
          <img src={Vagues} alt="loading..." />
        </div>
        </div>
        <div className="presentation-remarque">
          <h3>Remarque</h3>
          <p>
          Une séance d'hypnose ne remplace en aucune manière un avis ou un
          traitement médical. Seul un médecin peut poser des diagnostics et lui
          seul est habilité à prescrire, modifier ou supprimer un traitement
          médical. L'hypnose peut vous accompagner lors de votre traitement
          prescrit par votre médecin, parlez-en avec lui.
          </p>
        </div>
        <div className="container-therapies">
        <h2>Thérapies</h2>
        <div className="therapies-blocs">
          <Psycho
            picture={PicturePsycho}
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
            color="#F3F2EE"
          />
          <Comportement
            picture={PictureTrouble}
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
            trouble5="Préparation mentale à un événements"
            trouble6="Etc…"
            color="#F3F2EE"
          />
        </div>
      </div>
      <Footer/>
    </div>
    
  </div>
  );
};

export default Presentation;
