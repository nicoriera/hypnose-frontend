import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
          <div className="space-y-2 text-gray-600">
            <div>14 boulevard du Général de Gaulle</div>
            <div>64700 HENDAYE</div>
            <div>Tél. : 06 37 66 52 97</div>
            <div>
              <a
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                href="mailto:christophebaccou.hypnose@gmail.com">
                christophebaccou.hypnose@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
