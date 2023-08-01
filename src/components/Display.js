import React from "react";
import { ActionBar } from "./actionbar";
import Template from "./Template";
const Display = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "9px",
        height: "calc(100vh - 80px)",

        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          minWidth: "753px",
          height: "72px",
          marginBottom: "9px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActionBar />
      </div>
      <div style={{ width: "736px", overflow: "auto" }}>
        <Template />
      </div>
    </div>
  );
};

export default Display;
