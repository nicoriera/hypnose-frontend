import React from "react";

const Rdv = (props) => {
  return (
    <div>
      <div className="bloc-info" style={{ backgroundColor: props.color }}>
        <div>
          <h4 className="tarif-titre">{props.rdv}</h4>
          <span>{props.age}</span>
        </div>
        <p className="tarif-infos">{props.infos}</p>
        <div>
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
