import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          backgroundColor: "#000", // solid black background
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
