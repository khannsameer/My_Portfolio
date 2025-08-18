import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0d0d0d", // dark background (fix white flash)
      }}
    >
      {/* Loader animation */}
      <span className="canvas-load"></span>

      {/* Percentage text */}
      <p
        style={{
          fontSize: "16px",
          color: "#f1f1f1",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default Loader;
