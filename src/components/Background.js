import React from "react";
import zIndex from "@mui/material/styles/zIndex";

const Background = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "50",
          backgroundColor: "#000000",
          opacity: "0.75",
          width: "100%",
          height: "100vh",
          top: "0",
        }}
      />
    </>
  );
};

export default Background;
