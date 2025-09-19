// src/components/Card.jsx
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300">
      {children}
    </div>
  );
};

export default Card;
