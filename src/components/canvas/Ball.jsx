import React from "react";
import Tilt from "react-parallax-tilt";

const BallCanvas = ({ icon }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.1}
      transitionSpeed={2500}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-28 h-28"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg flex items-center justify-center p-4">
        <img src={icon} alt="tech-icon" className="w-16 h-16 object-contain" />
      </div>
    </Tilt>
  );
};

export default BallCanvas;
