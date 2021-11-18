import React from "react";

const Rdv = (props) => {
  return (
    <div>
      <div className="bloc-tarif" style={{ backgroundColor: props.color }}>
        <div className="tarif-titre">
          <h3>{props.rdv}</h3>
          <span>{props.age}</span>
        </div>
        <p>{props.infos}</p>
        <div>
          <span className="bold">Durée :</span>
          <span>{props.duree}</span>
        </div>

        <div className="bloc-tarif-prix">
          <span>Prix :</span>
          <span>{props.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Rdv;
