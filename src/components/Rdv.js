import React from "react";

const Rdv = (props) => {
  return (
    <div>
      <div className="bloc-info" style={{ backgroundColor: props.color }}>
        <div className="tarif-titre-bloc">
          <h4 className="tarif-titre">{props.rdv}</h4>
          <span className="tarif-age">{props.age}</span>
        </div>
        <p className="tarif-infos">{props.infos}</p>
        <div className="tarif-duree">
          <span className="bold">Durée :</span>
          <span>{props.duree}</span>
        </div>

        <div className="bloc-prix">
          <span>Prix : </span>
          <span>{props.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Rdv;
