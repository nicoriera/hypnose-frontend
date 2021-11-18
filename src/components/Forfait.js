import React from "react";

const Forfait = (props) => {
  return (
    <div>
      <div className="bloc-forfait" style={{ backgroundColor: props.color }}>
        <div className="forfait-titre">
          <h3>{props.forfait}</h3>
        </div>
        <p>{props.infos}</p>

        <div className="bloc-prix">
          <span>Prix :</span>
          <span>{props.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Forfait;
