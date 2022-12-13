import React from "react";

const Tarif = (props) => {
  return (
    <div>
      <div className="bloc-info" style={{ backgroundColor: props.color }}>
        <div>
          <h4 className="tarif-titre">{props.tarif}</h4>
          <ul>
            <li>{props.etudiant}</li>
            <li>{props.demandeur}</li>
            <li>{props.rsa}</li>
          </ul>
        </div>
        <p className="tarif-infos">{props.infos}</p>

        <div className="bloc-prix">
          <span>Prix : </span>
          <span>{props.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
