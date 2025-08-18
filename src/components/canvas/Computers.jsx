import React from "react";
import Tilt from "react-parallax-tilt";

const ComputersCanvas = ({ icon, title }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={2500}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-64 h-64"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6">
        <img
          src={icon}
          alt={title || "computer-icon"}
          className="w-24 h-24 object-contain mb-4"
        />
        {title && (
          <p className="text-white font-semibold text-lg text-center">
            {title}
          </p>
        )}
      </div>
    </Tilt>
  );
};

export default ComputersCanvas;
