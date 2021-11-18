import React from "react";

const Tarif = (props) => {
  return (
    <div>
      <div className="bloc-tarif" style={{ backgroundColor: props.color }}>
        <div className="tarif-titre">
          <h3>{props.tarif}</h3>
          <span>{props.age}</span>
          <ul>
            <li>{props.etudiant}</li>
            <li>{props.demandeur}</li>
            <li>{props.rsa}</li>
          </ul>
        </div>
        <p>{props.infos}</p>

        <div className="bloc-tarif-prix">
          <span>Prix :</span>
          <span>{props.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
