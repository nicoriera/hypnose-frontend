import React from "react";

const Tarif = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6" style={{ backgroundColor: props.color }}>
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            {props.tarif}
          </h4>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2 mt-1">•</span>
              <span>{props.etudiant}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2 mt-1">•</span>
              <span>{props.demandeur}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2 mt-1">•</span>
              <span>{props.rsa}</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{props.infos}</p>

        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <span className="font-semibold text-gray-900">Prix : </span>
          <span className="text-xl font-bold text-primary-600">
            {props.prix}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
