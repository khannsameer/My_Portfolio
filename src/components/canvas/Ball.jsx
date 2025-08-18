import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
      <img src={icon} alt="tech-icon" className="w-16 h-16 object-contain" />
    </div>
  );
};

export default BallCanvas;
