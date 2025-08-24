import React from "react";

import Map from "../components/Map";

const FooterMap = (props) => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <div>Hendaye</div>
              <div>14 boulevard du Général de Gaulle</div>
              <div>64700 HENDAYE</div>
              <div>Tél. 06 xx xx xx xx</div>
              <div>christophebaccou.hypnose@gmail.com</div>
            </div>
          </div>
          <div className="w-full">
            <Map />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMap;
