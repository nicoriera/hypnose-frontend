import React from "react";

const Forfait = (props) => {
  return (
    <div>
      <div className="bloc-info" style={{ backgroundColor: props.color }}>
        <div className="tarif-titre">
          <h4>{props.forfait}</h4>
          <span className="sous-titre">{props.soustitre}</span>
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

export default Forfait;
