import React from "react";
import Helmet from "react-helmet";
import Spiral from "../assets/pictures/spirale.jpg";

import Footer from "../components/Footer";
const Seance = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Seance</title>
        <meta
          name="description"
          content="L’hypnose Ericksonnienne est une thérapie brève dans laquelle vous
          êtes l’acteur.rice de votre propre changement. Les séances, s’il y
          en a plusieurs, sont généralement espacées de quelques jours/
          semaines afin de vous laisser le temps d’intégrer les changements.
          Je reste disponible, par mail ou téléphone, après ou entre vos
          séances si vous avez des questions ou des ressentis que vous
          souhaitez partager avec moi."
        />
      </Helmet>
      <div>
        <div className="seance">
          <div className="seance-image">
            <img src={Spiral} alt="seance-hypnose" />
          </div>
          <div className="seance-textes">
            <h1>Comment se déroule une séance ?</h1>
            <div className="trait"></div>
            <p>
              Contrairement à ce que laisse penser l’hypnose de spectacle,
              l’état hypnotique ne plonge pas dans un sommeil profond. La
              personne a conscience tout au long de la séance de ce qu’il se
              passe autour d’elle. Elle peut décider en toute autonomie de
              sortir de l’état d’hypnose. Elle peut aussi refuser certaines
              suggestions du thérapeute si celles-ci ne sont pas en accord avec
              ses valeurs profondes. Le travail va commencer en vous dès la
              prise de rendez-vous.
            </p>
            <p>
              Que vous réserviez un créneau par téléphone, message ou sur
              Doctolib, nous aurons un bref échange avant notre première
              rencontre. L’idée étant de faire connaissance et d’échanger sur
              votre besoin. Je vous expliquerai en quoi et comment je vais vous
              accompagner. Je vous donnerai les informations utiles à votre
              venue afin que votre séance soit uniquement dédiée à votre
              mieux-être.
            </p>
            <h3>Le jour J</h3>
            <p>
              Nous démarrerons par une phase d’entretien afin de clarifier votre
              demande. En effet, depuis notre conversation celle-ci aura pu
              murir et évoluer. Il est parfois difficile d’avoir une formulation
              précise de son envie. Nous travaillerons sur ce point. En effet,
              plus l’objectif est précis, plus les résultats seront probants.
              Puis, guidé par le son de ma voix, vous glisserez vers l’état
              d’hypnose. Vous accéderez ainsi à vos ressources intérieures,
              celles allant vous permettre d’atteindre les changements désirés.
            </p>
            <h3>Après la séance</h3>
            <p>
              L’hypnose Ericksonnienne est une thérapie brève dans laquelle vous
              êtes l’acteur.rice de votre propre changement. Les séances, s’il y
              en a plusieurs, sont généralement espacées de quelques jours/
              semaines afin de vous laisser le temps d’intégrer les changements.
              Je reste disponible, par mail ou téléphone, après ou entre vos
              séances si vous avez des questions ou des ressentis que vous
              souhaitez partager avec moi.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Seance;
