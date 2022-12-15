import React from "react";

// import troublesComportementauxData from "../data/troubles_comportementaux.json";

// const renderTroubles = (troubles_comportementaux) => {
//   return (
//     <div>
//       {troubles_comportementaux.map((troubles, idx) => {
//         return (
//           <ul key={idx}>
//             <li>{troubles.trouble}</li>
//             <li>{troubles.trouble1}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };
const Comportement = (props) => {
  return (
    <div>
      <div
        className="therapies-bloc-info"
        style={{ backgroundColor: props.color }}
      >
        <div>
          <h4 className="therapie-titre">{props.therapie}</h4>
        </div>
        <div className="therapie-picture">
          <img src={props.picture} alt={props.alt} />
        </div>
        {/* <div>
          {renderTroubles(troublesComportementauxData.troubles_comportementaux)}
        </div> */}
        <ul>
          <li>{props.trouble1}</li>
          <li>{props.trouble2}</li>
          <li>{props.trouble3}</li>
          <li>{props.trouble4}</li>
          <li>{props.trouble5}</li>
          <li>{props.trouble6}</li>
          <li>{props.trouble7}</li>
        </ul>
      </div>
    </div>
  );
};

export default Comportement;
