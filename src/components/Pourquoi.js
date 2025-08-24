import React, { memo } from "react";

const Pourquoi = memo(({ picture, alt, text }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
      <img
        src={picture}
        alt={alt}
        loading="lazy"
        decoding="async"
        width="250"
        height="200"
        className="w-full max-w-64 h-48 object-cover rounded-lg shadow-sm"
      />
      <p className="text-lg font-medium text-gray-800 leading-relaxed">
        {text}
      </p>
    </div>
  );
});

Pourquoi.displayName = "Pourquoi";

export default Pourquoi;
