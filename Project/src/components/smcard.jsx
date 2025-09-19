// src/components/SmCard.jsx
import React from "react";

const SmCard = ({ children }) => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition duration-300">
      {children}
    </div>
  );
};

export default SmCard;
