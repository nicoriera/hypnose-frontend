import React from "react";

const Comportement = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6" style={{ backgroundColor: props.color }}>
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            {props.therapie}
          </h4>
        </div>
        <div className="mb-6">
          <img
            src={props.picture}
            alt={props.alt}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble1}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble2}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble3}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble4}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble5}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble6}</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-2 mt-1">•</span>
            <span>{props.trouble7}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comportement;
