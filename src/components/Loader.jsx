// src/components/Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/animation/loading.json"; // your JSON

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#292929",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Lottie animationData={loaderAnimation}  speed={0.5} style={{ width: 200, height: 200 }} loop={true} />
    </div>
  );
};

export default Loader;