import React from "react";

import Vagues from "../assets/pictures/vague.gif"

import Footer from "../components/Footer";

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
      <Footer/>
    </div>
    
  </div>
  );
};

export default Presentation;
