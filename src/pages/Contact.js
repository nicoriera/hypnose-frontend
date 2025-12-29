import React from "react";
import Helmet from "react-helmet";

const Contact = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Comment me contacter</title>
        <meta
          name="description"
          content="Christophe Baccou - Praticien certifié en hypnose ericksonienne"
        />
      </Helmet>
      <div className="container-contact">
        <div className="infos-contact">
          <div className="info-christophe">
            <h1>Comment me contacter ?</h1>
            <div className="trait"></div>
            <div>
              <span className="bold">Christophe Baccou</span>
              <span> - Praticien certifié en hypnose ericksonienne</span>
              <div className="info-christophe-siret">
                <span className="bold">Numéro de Siret :</span>
                <span> 822624086</span>
              </div>
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

export default Contact;
